// Lib
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// CONTAINER
import { AppContainerProps } from './AppContainer';

// COMPONENTS
import NotFound from '@app/components/NotFound';
import Main from '@app/pages/Main';

// SCSS
import './App.scss';

type AppStatesInterface = {};
type AppPropsInterface = {} & AppContainerProps;

export default class App extends React.Component<AppPropsInterface, AppStatesInterface> {
    constructor(props: AppPropsInterface) {
        super(props);
    }

    render() {
        return (
            <div id='app' style={{
                backgroundColor: this.props.temaColor
            }}>
                <Switch>
                    <Route
                        path='/'
                        component={Main}
                        exact
                    />
                    {/* <Route
                        path='/contents'
                        component={}
                    /> */}
                    <Route
                        path='**'
                        component={NotFound}
                    />
                </Switch>
            </div>
        );
    }
}
