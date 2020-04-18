import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './biocrypt/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-crop/dist/ReactCrop.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
