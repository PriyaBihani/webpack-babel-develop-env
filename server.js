import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import fs from 'fs';
import App from './src/App';
import store from './src/store';
import axios from 'axios';
import serialize from 'serialize-javascript';

const path = require('path');

const PORT = process.env.PORT || 3000;

var index = fs.readFileSync('build/index.html').toString();

// const parts = html.split('<!-- not rendered -->');

const app = express();

const fetchArticles = async () => {
	try {
		console.log('fetch articles running')
		const res = await axios.get('http://localhost:3001/api/article/all')
		const articles = res.data.data.articles
		return articles
	} catch (error) {
		console.log(error.message)
	}
}

app.use(express.static('build'));
app.use(async (req, res) => {



	var finalHtml
	var articles
	if (req.url === "/blog") {
		articles = await fetchArticles()
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
	const html = ReactDOMServer.renderToString(reactMarkup);


	finalHtml = index
		.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
		.replace(
			'//script',
			`window._INITIAL_DATA_ = ${serialize(articles)}`
		);

	// 		.replace(
	// 			'//script',
	// 			`window._INITIAL_DATA_ = 
	// ${serialize(articlesArray)}`
	// );
	res.send(finalHtml);
	res.end();
});



console.log(`listening on ${PORT}`);
app.listen(PORT);
