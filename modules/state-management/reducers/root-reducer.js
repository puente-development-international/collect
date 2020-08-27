import { combineReducers } from 'redux';
import login from './login';
import dashboardControls from './dashboard-controls';

export default combineReducers({
  login,
  dashboardControls
});
