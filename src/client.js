import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './clientStore';


import App from './App';
import rootReducer from './reducers';

import './index.css';
import 'bootstrap/dist/js/bootstrap.js';

const middleware = [thunk];


// const store = createStore(
// 	rootReducer,
// 	window._INITIAL_DATA_,
// 	composeWithDevTools(applyMiddleware(...middleware))
// );

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

// // import 'core-js/stable';
// // import 'regenerator-runtime/runtime';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import store from './store';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<BrowserRouter>
// 				<App />
// 			</BrowserRouter>
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );


// reportWebVitals();
