import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountDetails from './components/AccountDetails';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/events' exact component={Events} />
					<Route path='/dashboard' exact component={Dashboard} />
					<Route path='/register' exact component={AccountDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
