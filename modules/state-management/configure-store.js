import { createStore } from "redux";

import rootReducer from './reducers/root-reducer';

const configureStore = (initialState = {}) => {

  const store = createStore(rootReducer,
    initialState
  );

  return store;
};

export default configureStore;