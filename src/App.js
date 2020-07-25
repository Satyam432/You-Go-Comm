import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/events' component={Events} />
				<Route path='/' exact component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
