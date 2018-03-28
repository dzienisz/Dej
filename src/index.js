import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
