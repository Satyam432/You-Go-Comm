import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/events' component={Events} />
					<Route path='/' exact component={Home} />
					<Route path='/dashboard' component={Dashboard} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
