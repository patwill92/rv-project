import React, {Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Modal from './components/Modal'

const styles = theme => ({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            fontFamily: "'Open Sans', 'o-sans', 'sans-serif'"
        },
        body: {
            margin: 0,
            position: 'relative',
            width: '100%',
            minHeight: '100%',
            backgroundColor: theme.palette.primaryLight
        },
        'a:[href^="tel:"]': {
            color: '#fff !important',
            textDecoration: 'none !important'
        }
    }
});

const App = props => {
    const {route, modal} = props;
    return (
        <Fragment>
            <NavBar/>
            {renderRoutes(route.routes)}
            <Footer/>
            {modal && <Modal/>}
        </Fragment>
    )
};

export default {
    component: connect(({ui}) => ({modal: ui.modal}))(injectSheet(styles)(App))
};
