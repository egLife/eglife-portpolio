// LIB
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { returntypeof } from 'react-redux-typescript';
import { bindActionCreators, Dispatch } from 'redux';

// COMPONENT
import Main from './Main';

// INTERFACE
import Types from 'Types';

const mapStateToProps = (state: Types.RootStates) => ({
    currentRoute: state.router.location.pathname,
    temaColor: state.appConfig.ConfigCSSInfo.componentTemaColor,
    isShowMain: state.appConfig.ConfigStatusInfo.isShowMain
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootActions>) => (
    bindActionCreators({
    }, dispatch)
);

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export type MainContainerProps = typeof statePropTypes & typeof actionPropTypes & RouteComponentProps & {};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
