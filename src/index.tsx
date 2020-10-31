// Lib
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// COMPONENTS
import App from './pages';

// STORE
import store, { history } from '@app/store';

// SCSS
import './style/hexagon.scss';
import './style/fontStyle.scss';

// Render React components.
ReactDOM.render(
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    ), document.getElementById('root')
);
