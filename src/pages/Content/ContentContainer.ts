// LIB
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { returntypeof } from 'react-redux-typescript';
import { bindActionCreators, Dispatch } from 'redux';

// COMPONENT
import Content from './Content';

// INTERFACE
import Types from 'Types';

const mapStateToProps = (state: Types.RootStates) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootActions>) => (
    bindActionCreators({
    }, dispatch)
);

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export type ContentContainerProps = typeof statePropTypes & typeof actionPropTypes & RouteComponentProps & {};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
