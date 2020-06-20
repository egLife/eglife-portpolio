// LIB
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { returntypeof } from 'react-redux-typescript';
import { bindActionCreators, Dispatch } from 'redux';

// COMPONENT
import App from './App';

// INTERFACE
import Types from 'Types';

const mapStateToProps = (state: Types.RootStates) => ({
    currentRoute: state.router.location.pathname,
    temaColor: state.appConfig.ConfigCSSInfo.componentTemaColor,
    textColor: state.appConfig.ConfigCSSInfo.componentTextColor,
    pageNum: state.appConfig.ConfigStatusInfo.isPageNum,
    isShowWelcome: state.appConfig.ConfigStatusInfo.isShowMain
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootActions>) => (
    bindActionCreators({
    }, dispatch)
);

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export type AppContainerProps = typeof statePropTypes & typeof actionPropTypes & RouteComponentProps & {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
