// Lib
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import { history } from '@app/store';

// CONTAINER
import { AppContainerProps } from './AppContainer';
import Main from '@app/pages/Main';

// COMPONENTS
import NotFound from '@app/components/NotFound';
import Loading from '@app/components/Loading';

// SCSS
import './App.scss';

type AppStatesInterface = {};
type AppPropsInterface = {} & AppContainerProps;

// Asynchronous app components for lazy-load
const AsyncContentComponent = Loadable({
    loader: () => import(/* webpackChunkName: "content" */ './Menu'),
    loading: Loading
});

export default class App extends React.Component<AppPropsInterface, AppStatesInterface> {
    constructor(props: AppPropsInterface) {
        super(props);
    }

    componentDidMount() {
        history.push('/');
    }

    render() {
        return (
            <div id='app' style={{
                // backgroundColor: this.props.temaColor
                backgroundColor: 'black'
            }}>
                <Switch>
                    <Route
                        path='/'
                        component={Main}
                        exact
                    />
                    <Route
                        path='/menu'
                        component={AsyncContentComponent}
                        exact
                    />
                    <Route
                        path='**'
                        component={NotFound}
                    />
                </Switch>
            </div>
        );
    }
}
