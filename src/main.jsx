import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './containers/Home/Home';
import { myGlobalStyles } from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <myGlobalStyles />
    <Home />
  </React.StrictMode>,
)
