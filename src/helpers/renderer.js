import React from 'react';
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript'
import {create as createJss} from 'jss'
import preset from 'jss-preset-default'
import {JssProvider, SheetsRegistry, ThemeProvider} from 'react-jss'

import theme from '../styles/theme'

const jss = createJss();
jss.setup(preset());

export default (req, store, context, routes) => {
    const sheets = new SheetsRegistry();
    const initStore = store.getState();
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <JssProvider registry={sheets} jss={jss}>
                    <ThemeProvider theme={theme}>
                        {renderRoutes(routes)}
                    </ThemeProvider>
                </JssProvider>
            </StaticRouter>
        </Provider>
    );
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" href="images/logoIcon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,800" rel="stylesheet">
        <style>
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-bold-webfont.woff2') format('woff2'),
                     url('fonts/opensans-bold-webfont.woff') format('woff');
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-bolditalic-webfont.woff2') format('woff2'),
                     url('fonts/opensans-bolditalic-webfont.woff') format('woff');
                font-weight: bold;
                font-style: italic;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-extrabold-webfont.woff2') format('woff2'),
                     url('fonts/opensans-extrabold-webfont.woff') format('woff');
                font-weight: 800;
                font-style: normal;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-extrabolditalic-webfont.woff2') format('woff2'),
                     url('fonts/opensans-extrabolditalic-webfont.woff') format('woff');
                font-weight: 800;
                font-style: italic;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('opensans-italic-webfont.woff2') format('woff2'),
                     url('opensans-italic-webfont.woff') format('woff');
                font-weight: normal;
                font-style: italic;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-light-webfont.woff2') format('woff2'),
                     url('fonts/opensans-light-webfont.woff') format('woff');
                font-weight: 300;
                font-style: normal;
            
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-lightitalic-webfont.woff2') format('woff2'),
                     url('fonts/opensans-lightitalic-webfont.woff') format('woff');
                font-weight: 300;
                font-style: italic;
            
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-regular-webfont.woff2') format('woff2'),
                     url('fonts/opensans-regular-webfont.woff') format('woff');
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-semibold-webfont.woff2') format('woff2'),
                     url('fonts/opensans-semibold-webfont.woff') format('woff');
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: 'o-sans';
                src: url('fonts/opensans-semibolditalic-webfont.woff2') format('woff2'),
                     url('fonts/opensans-semibolditalic-webfont.woff') format('woff');
                font-weight: 600;
                font-style: italic;
            }
        </style>
        <style type="text/css" id="server-side-styles">
          ${sheets.toString()}
        </style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script id="initialState">
            window.INITIAL_STATE = ${serialize(initStore)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
