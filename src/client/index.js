import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {ThemeProvider, JssProvider} from 'react-jss'
import {create as createJss} from 'jss'
import preset from 'jss-preset-default'
import {clientStore as createClientStore} from '../redux/store'
import routes from './Routes'
import theme from '../styles/theme'

const store = createClientStore(window.INITIAL_STATE);
const jss = createJss();
jss.setup(preset());
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <JssProvider jss={jss}>
                <ThemeProvider theme={theme}>
                    {renderRoutes(routes)}
                </ThemeProvider>
            </JssProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'),
    () => {
        const jssStyles = document.getElementById('server-side-styles');
        jssStyles.parentNode.removeChild(jssStyles);
    }
);
