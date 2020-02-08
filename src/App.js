// @flow
import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import createStore from 'store/createStore';
import Router from './router';

function App() {
  const { store, persistor } = createStore();
  return (
    <div className="App">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router />
        </Provider>
      </PersistGate>
    </div>
  );
}

export default App;
