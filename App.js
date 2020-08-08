//REACT 
import React from 'react';
import MainNavigation from './components/MainNavigation';

//REDUX
import { Provider } from "react-redux";
import configureStore from './modules/state-management/configure-store';

const store = configureStore();


export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const isLoadingComplete = useCachedResources();

    // if (!isLoadingComplete) {
    //   return null;
    // }
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
