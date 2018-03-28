import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Router, Route, browserHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
