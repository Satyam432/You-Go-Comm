import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountDetails from './components/AccountDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard/Dashboard';
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/events' component={Events} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route
                            path='/account-details'
                            component={AccountDetails}
                        />
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
};

export default App;
