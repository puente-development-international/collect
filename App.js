// REACT
import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './components/MainNavigation';

// REDUX
import configureStore from './modules/state-management/configure-store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App
