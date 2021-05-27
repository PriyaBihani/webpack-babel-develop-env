import React, { useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

import { loadUser } from './actions/auth';
import { setAuthToken, isClient } from './helpers/setAuthToken';

import store from './store';
import Routes from './Routes';
import Navbar from './layout/Navbar/Navbar';

if (isClient && localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = ({ route }) => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	console.log('app, checking working');
	return (
		<div className='App'>
			<Navbar />
			<AnimatePresence>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>
					{Routes.map(({ path, exact, component: C, render }) => {
						<>
							<Route
								key={path}
								path={path}
								exact={exact}
								{...(C ? { component: { C } } : { render: { render } })}
							/>
						</>;
					})}
				</Switch>
			</AnimatePresence>
			<ToastContainer />
		</div>
	);
};

export default App;
