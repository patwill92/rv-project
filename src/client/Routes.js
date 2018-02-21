import React from 'react';
import App from './App'

//pages
import Home from './pages/Home'

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            }
        ]
    }
];