import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../Container'
import Form from './Form'
import Text from '../Text'
import {openModal, sendForm} from "../../../redux/actions";

const animation = (name, property, from, to) => {
    return {
        [`@keyframes ${name}`]: {
            from: `${property}: ${from}`,
            to: `${property}: ${to}`
        }
    }
};

const drop = animation('drop', 'top', '-30vh', '5%');
const back = animation('dropBack', 'top', '5%', '-50vh');
const fadeIn = animation('fadeIn', 'opacity', 0.3, 1.0);
const fadeOverlay = animation('fadeOverlay', 'opacity', 0.0, 0.5);
const fadeOutOverlay = animation('fadeOutOverlay', 'opacity', 0.5, 0.0);
const fadeOut = animation('fadeOut', 'opacity', 1.0, 0.0);

const styles = theme => ({
    ...drop,
    ...back,
    ...fadeOut,
    ...fadeIn,
    ...fadeOverlay,
    ...fadeOutOverlay,
    '@global': {
        '::-webkit-scrollbar': {
            width: 0,
            background: 'transparent'
        }
    },
    overlay: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        right: 0,
        backgroundColor: 'rgb(0,0,0)',
        animationFillMode: 'both !important',
        zIndex: 9
    },
    root: {
        margin: 'auto',
        boxShadow: theme.shadows[3],
        backgroundColor: '#fff',
        top: 0,
        position: 'fixed',
        left: '25%',
        width: '50%',
        animationFillMode: 'forwards !important',
        zIndex: 10,
        '& *': {
            zIndex: 10
        },
        maxHeight: '90%',
        overflowY: 'scroll',
        '-webkit-overflow-scrolling': 'touch'
    },
    header: {
        color: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: theme.palette.primary,
        minWidth: '100%',
        position: 'sticky',
        boxShadow: theme.shadows[3],
        top: 0,
        bottom: 0,
        zIndex: 11

    },
    close: {
        position: 'absolute',
        right: 15,
        top: 8,
        fontSize: 25,
        cursor: 'pointer'
    },
    headerEmail: {
        fontSize: 13
    },
    message: {
        padding: [15, 0, 12, 0]
    },
    footer: {
        backgroundColor: theme.palette.lightGrey,
    },
    footerText: {
        marginTop: 15,
        padding: [15, 0],
        fontSize: 11
    },
    '@media (max-width: 991px)': {
        root: {
            width: '80%',
            left: '10%'
        }
    },
    '@media (max-width: 575px)': {
        footer: {display: 'none'},
        root: {
            width: '95%',
            left: '2.5%'
        }
    }
});

@connect(({ui, form}) => ({modal: ui.modal, form: form.contact}), {openModal, sendForm})
@injectSheet(styles)
class Modal extends Component {
    state = {
        animation: '',
        overlay: '',
        ownPool: false,
        reply: ''
    };

    flipSwitch = () => {
        this.setState({ownPool: !this.state.ownPool})
    };

    componentDidMount = () => {
        this.setState({
            animation: 'drop 0.3s ease-in-out, fadeIn 0.3s ease-in-out',
            overlay: 'fadeOverlay 0.3s ease-in-out'
        })
    };

    closeModal = () => {
        this.setState({
            animation: 'dropBack 0.3s ease-in-out, fadeOut 0.3s ease-in-out',
            overlay: 'fadeOutOverlay 0.3s ease-in-out'
        }, () => {
            setTimeout(() => this.props.openModal(false), 300)
        })
    };

    sendForm = () => {
        const formData = {...this.props.form.values, poolOwner: this.state.ownPool};
        this.props.sendForm(formData);
    };

    render() {
        const {classes, modal} = this.props;
        return (
            <Fragment>
                <div className={classes.overlay} style={{animation: this.state.overlay}} onClick={this.closeModal}/>
                <div className={classes.root} style={{animation: this.state.animation}}>
                    <Container className={classes.header} component={'header'} padding>
                        <Text className={classes.headerEmail} component={'div'} weight={'medium'}
                              type={'caption'}>EMAIL</Text>
                        <Text type={'title'} weight={'light'} component={'div'}>{modal.name}</Text>
                        <Text className={classes.close}
                              type={'subtitle'}
                              onClick={this.closeModal}
                              weight={'medium'}
                              component={'div'}>&times;</Text>
                    </Container>
                    <Container className={classes.body} component={'section'} padding>
                        <Text className={classes.message} component={'div'} type={'caption'}>
                            Fill out the form below and Premium <span>{modal.name}</span> will get in touch
                        </Text>
                        <Form ownPool={this.state.ownPool} closeModal={this.closeModal} flipSwitch={this.flipSwitch} onSubmit={this.sendForm}
                              reply={modal.message || null}/>
                    </Container>
                    <Container className={classes.footer} padding>
                        <Text className={classes.footerText} component={'div'} type={'footer'}>
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut
                                aliquip
                                ex.
                            </small>
                        </Text>
                    </Container>
                </div>
            </Fragment>
        )
    };
}

export default Modal