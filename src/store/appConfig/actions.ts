// Lib
import { action } from 'typesafe-actions';

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

// ====================== CSS
export const configUpdateCSS = {
    updateComponentBgColor: (bgColor: string) => action(
        CONFIG_UPDATE_CSS_COMPONENT_BG_COLOR,
        bgColor
    ),
    updateComponentTextColor: (textColor: string) => action(
        CONFIG_UPDATE_CSS_COMPONENT_TEXT_COLOR,
        textColor
    ),
    updateComponentTitleColor: (titleColor: string) => action(
        CONFIG_UPDATE_CSS_COMPONENT_TITLE_COLOR,
        titleColor
    )
};

// ====================== STATUS
export const configUpdateStatus = {
    updateStatusIsShowMain: (isShowMain: boolean) => action(
        CONFIG_UPDATE_STATUS_IS_SHOW_MAIN,
        isShowMain
    ),
    updateStatusPageNum: (pageNum: number) => action(
        CONFIG_UPDATE_STATUS_PAGE_NUM,
        pageNum
    )
};

// ====================== INIT
export const configInit = {
    initCSS: () => action(
        CONFIG_INIT_CSS_ALL
    ),
    initStatus: () => action(
        CONFIG_INIT_STATUS_ALL
    ),
};
