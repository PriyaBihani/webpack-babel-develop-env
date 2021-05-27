import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

import fs from 'fs';
import axios from 'axios';
import reload from 'reload';
import thunk from 'redux-thunk';
import serialize from 'serialize-javascript';
import { createStore, applyMiddleware } from 'redux';

import Routes from './src/Routes';
import rootReducers from './src/reducers';

const path = require('path');

const PORT = process.env.PORT || 3000;

var index = fs.readFileSync('build/index.html').toString();

// const parts = html.split('<!-- not rendered -->');

const app = express();
const dev = process.env.NODE_ENV === 'development';
const store = createStore(rootReducers, applyMiddleware(thunk));

app.use(express.static('build'));

if (dev) reload(app);

app.use(async (req, res) => {
	const branch = matchPath(Routes, req.url);
	console.log('branch', branch);
	const promises = branch.map(({ route }) => {
		// console.log(route);
		let component = route.component;
		console.log(component);
		let loadData = component.loadData;
		return loadData instanceof Function
			? loadData(store)
			: Promise.resolve(null);
	});
	Promise.all(promises).then((data) => {
		const reactMarkup = (
			<React.StrictMode>
				<Provider store={store}>
					<StaticRouter location={req.url} context={{}}>
						{renderRoutes(Routes)}
					</StaticRouter>
				</Provider>
			</React.StrictMode>
		);
		const html = renderToString(reactMarkup);

		let finalHtml = index
			.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
			.replace(
				'//script',
				`window._INITIAL_DATA_ = ${serialize(store.getState())}`
			);

		// console.log(finalHtml);
		// console.log('working');
		res.send(finalHtml);
		res.end();
	});
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
