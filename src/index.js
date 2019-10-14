import React from 'react';
import ReactDOM from 'react-dom';
import './Css/bootstrap.css';
import './Css/style.css';
import Container from './Components/Container/Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('wrapper'));
registerServiceWorker();
