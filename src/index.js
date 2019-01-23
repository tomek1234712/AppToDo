import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App title = "Relevant Persons" / > , document.getElementById('root'));
registerServiceWorker();