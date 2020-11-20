import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Catalog from './components/Catalog';

import store from './store';

import './app.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-content-wrapper">
        <Catalog />
        <div className="vertical-divisor" />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
