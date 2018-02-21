import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import NavBar from './components/NavBar'

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
            height: '100%'
        }
    },
    background: {
        backgroundImage: 'url("images/water-image.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 20%',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        zIndex: -1,
        top: 0
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        background: {
            backgroundPosition: '0 180px',
        },
    },
    '@media (max-width: 767px)': {
        background: {
            backgroundPosition: '0 80px',
        },
    }
});

@connect(({ui}) => ({nav: ui.nav}), null)
@injectSheet(styles)
class App extends Component {
    render() {
        const {route, classes} = this.props;
        return (
            <Fragment>
                <NavBar/>
                {renderRoutes(route.routes)}
                <div className={classes.background}/>
            </Fragment>
        )
    }
}

export default {
    component: App
};
