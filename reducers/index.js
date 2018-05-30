import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

const padApp = combineReducers({
  authStore: authReducer,
  form: formReducer
});

export default padApp;
