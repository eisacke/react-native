import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import promise from 'redux-promise-middleware';

// TODO: potentially put this back in once we know exactly what it does...
// import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(promise(), thunk);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    middleware
  );
}
