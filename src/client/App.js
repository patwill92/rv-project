import React, {Component, Fragment} from 'react'
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
            minHeight: '100vh',
        },
        html: {
            minHeight: '100%'
        }
    }
});

@connect(({ui}) => ({nav: ui.nav, modal: ui.modal}))
@injectSheet(styles)
class App extends Component {
    render() {
        const {route, modal, classes} = this.props;
        return (
            <Fragment>
                <NavBar modal={modal}/>
                {renderRoutes(route.routes)}
                <Footer modal={modal}/>
                {modal && <Modal/>}
            </Fragment>
        )
    }
}

export default {
    component: App
};
