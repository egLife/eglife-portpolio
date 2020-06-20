import { StateType } from 'typesafe-actions';
import rootReducer from './root-reducer';
import { ConfigAction } from './appConfig';

declare module 'Types' {
    export type RootStates = StateType<ReturnType<typeof rootReducer>>;
    export type RootActions =
        ConfigAction;
}
