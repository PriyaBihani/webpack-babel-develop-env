import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import rootReducer from './reducers';

import './index.css';
import 'bootstrap/dist/js/bootstrap.js';

const state = window._INITIAL_DATA_;

delete window._INITIAL_DATA_;

const store = createStore(
	rootReducer,
	state,
	composeWithDevTools(applyMiddleware(thunk))
);

console.log('working prehydrate');

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
