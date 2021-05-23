import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App articles={window._INITIAL_DATA_} />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
