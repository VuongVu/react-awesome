import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
