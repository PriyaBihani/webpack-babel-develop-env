import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import fs from 'fs';
import App from './src/App';
import store from './src/store';

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('build/index.html').toString();

const parts = html.split('<!-- not rendered -->');

const app = express();

app.use(express.static('build'));
app.use((req, res) => {
	const reactMarkup = (
		<React.StrictMode>
			<Provider store={store}>
				<StaticRouter url={req.url}>
					<App />
				</StaticRouter>
			</Provider>
		</React.StrictMode>
	);

	res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
	res.end();
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
