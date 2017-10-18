import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'basscss/css/basscss.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
