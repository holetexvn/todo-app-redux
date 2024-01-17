import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancers)

export default store