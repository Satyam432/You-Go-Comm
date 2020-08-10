import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountDetails from './components/AccountDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import Paperbase from './components/Paperbase/Paperbase';
import AuthRoute from './utils/AuthRoute';
const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Router>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/events' component={Events} />
						<AuthRoute path='/dashboard' component={Paperbase} />
						<AuthRoute path='/account-details' component={AccountDetails} />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
};

export default App;
