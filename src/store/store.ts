import { createStore } from 'redux';
import { createBrowserHistory } from 'history';

import rootReducer from './root-reducer';

export const history = createBrowserHistory();

const store = createStore(
    rootReducer(history)
);

export default store;
