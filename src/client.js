import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import rootReducer from './reducers';

import './index.css';
import 'bootstrap/dist/js/bootstrap.js';

const store = createStore(
	rootReducer,
	window._INITIAL_DATA_,
	applyMiddleware(thunk)
);

console.log('working prehydreate');

ReactDOM.hydrate(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
