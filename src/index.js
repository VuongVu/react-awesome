import React from 'react';
import ReactDOM from 'react-dom';

// import App from './containers/App';
import Voting from './containers/Voting';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Voting />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
