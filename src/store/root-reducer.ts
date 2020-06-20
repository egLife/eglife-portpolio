// Lib
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// Custom
import { configReducer } from './appConfig';

export default (history: History<any>) => combineReducers({
    router: connectRouter(history),
    appConfig: configReducer
});
