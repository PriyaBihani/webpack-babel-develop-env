import express from 'express';
import React from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import fs from 'fs';
import App from './src/App';
import store from './src/store';
import reload from 'reload';
import axios from 'axios';
import serialize from 'serialize-javascript';

const path = require('path');

const PORT = process.env.PORT || 3000;

var index = fs.readFileSync('build/index.html').toString();

// const parts = html.split('<!-- not rendered -->');

const app = express();
const dev = process.env.NODE_ENV === 'development';

const fetchArticles = async () => {
	try {
		console.log('fetch articles running');
		const res = await axios.get('http://localhost:3001/api/article/all');
		const articles = res.data.data.articles;
		return articles;
	} catch (error) {
		console.log(error.message);
	}
};

app.use(express.static('build'));

if (dev) reload(app);

app.use(async (req, res) => {
	var finalHtml;
	var articles;
	if (req.url === '/blog') {
		articles = await fetchArticles();
	}
	const reactMarkup = (
		<React.StrictMode>
			<Provider store={store}>
				<StaticRouter location={req.url} context={{}}>
					<App articles={articles} />
				</StaticRouter>
			</Provider>
		</React.StrictMode>
	);
	const html = renderToString(reactMarkup);

	finalHtml = index
		.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
		.replace('//script', `window._INITIAL_DATA_ = ${serialize(articles)}`);

	// console.log(finalHtml);
	// console.log('working');
	res.send(finalHtml);
	res.end();
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
