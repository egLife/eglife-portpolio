// Lib
import * as React from 'react';

// Scss
import './App.scss';

type AppStatesInterface = {};
type AppPropsInterface = {};

export default class App extends React.Component<AppPropsInterface, AppStatesInterface> {
    constructor(props: AppPropsInterface) {
        super(props);
    }

    render() {
        return (
            <div id='app'>
            </div>
        );
    }
}
