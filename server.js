import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

import fs from 'fs';
import axios from 'axios';
import reload from 'reload';
import serialize from 'serialize-javascript';

import App from './src/App';
import routes from './src/Routes';
import createStore from './src/store';
import { ids } from 'webpack';

const PORT = process.env.PORT || 3000;

var index = fs.readFileSync('build/index.html').toString();

const app = express();
const dev = process.env.NODE_ENV === 'development';

app.use(express.static('build'));

if (dev) reload(app);

app.use(async (req, res) => {
	const store = createStore();
	let activeRoute
	routes.map(route => {
		const match = (matchPath(req.url, { ...route, exact: true, url: req.url }))
		if (match) {
			activeRoute = { ...route, params: match.params }
		}
	})

	// const activeRoute =
	// 	routes.find((route) => matchPath(req.url, { ...route, exact: true, url: req.url })) || {};

	console.log('ad', activeRoute);
	console.log("This is match path", req.url)

	const promise = activeRoute?.loadData
		? activeRoute.loadData(store, activeRoute.params)
		: Promise.resolve();

	promise.then((data) => {
		const reactMarkup = (
			<React.StrictMode>
				<Provider store={store}>
					<StaticRouter location={req.url} context={{}}>
						<App />
					</StaticRouter>
				</Provider>
			</React.StrictMode>
		);
		const html = renderToString(reactMarkup);
		let finalHtml = index
			.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
			.replace(
				'//script',
				`window._INITIAL_DATA_ = ${serialize(store.getState()).replace(
					/</g,
					'\\u003c'
				)}`
			);
		// console.log('working', finalHtml);
		res.send(finalHtml);
		res.end();
	});
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
