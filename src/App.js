import React from 'react';
import store from './config/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import 'antd/dist/reset.css';
import './assets/css/style.min.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
