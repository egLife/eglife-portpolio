// Lib
import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

// ACTIONS
import * as config from './actions';

// CONSTANTS
// CONSTANTS
import {
    // CSS
    CONFIG_UPDATE_CSS_COMPONENT_BG_COLOR,
    CONFIG_UPDATE_CSS_COMPONENT_TEXT_COLOR,
    CONFIG_UPDATE_CSS_COMPONENT_TITLE_COLOR,

    // STATUS
    CONFIG_UPDATE_STATUS_IS_SHOW_MAIN,
    CONFIG_UPDATE_STATUS_PAGE_NUM,

    // INIT
    CONFIG_INIT_STATUS_ALL,
    CONFIG_INIT_CSS_ALL
} from './constants';

// DEFAULT
import {
    defaultCSSState,
    defaultStatusState
} from './default';

// MODELS
import {
    ConfigCSSDefaultType,
    ConfigStatusDefaultType
} from './models';


export type ConfigAction = ActionType<typeof config>;
export type ConfigState = {
    readonly ConfigCSSInfo: ConfigCSSDefaultType,
    readonly ConfigStatusInfo: ConfigStatusDefaultType
};

export default combineReducers<ConfigState, ConfigAction> ({
    ConfigCSSInfo: (state = defaultCSSState, action) => {
        switch (action.type) {
            case CONFIG_INIT_CSS_ALL:
                return defaultCSSState;
            case CONFIG_UPDATE_CSS_COMPONENT_BG_COLOR:
                return {
                    ...state,
                    componentBgColor: action.payload
                };
            case CONFIG_UPDATE_CSS_COMPONENT_TEXT_COLOR:
                return {
                    ...state,
                    componentTextColor: action.payload
                };
            case CONFIG_UPDATE_CSS_COMPONENT_TITLE_COLOR:
                return {
                    ...state,
                    componentTitleColor: action.payload
                };
            default: return state;
        }
    },
    ConfigStatusInfo: (state = defaultStatusState, action) => {
        switch (action.type) {
            case CONFIG_INIT_STATUS_ALL:
                return defaultStatusState;
            case CONFIG_UPDATE_STATUS_IS_SHOW_MAIN:
                return {
                    ...state,
                    isShowMain: action.payload
                };
            case CONFIG_UPDATE_STATUS_PAGE_NUM:
                return {
                    ...state,
                    isPageNum: action.payload
                };
            default: return state;
        }
    }
});
