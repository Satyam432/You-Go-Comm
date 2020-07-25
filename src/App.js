import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/events' component={Events} />
				<Route path='/' exact component={Home} />
				<Route path='/dashboard' component={Dashboard} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
