import React, {Component} from 'react';
import injectSheet from 'react-jss';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Text from '../../Text'
import Container from '../../Container'
import Button from '../../Button'
import {toggleNav} from "../../../../redux/actions";
import mobileStyles from './mobileStyles'

const styles = theme => ({
    root: {
        backgroundColor: '#fff',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.31)',
        position: 'relative'
    },
    container: {
        extend: theme.rowBetween,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    links: {
        color: theme.palette.primary,
        padding: '30px 15px',
        textDecoration: 'none',
        display: 'inline-block'
    },
    figure: {
        maxWidth: 216,
        margin: 0
    },
    img: {
        maxWidth: '100%'
    },
    linksWrapper: {
        extend: theme.rowEnd,
        alignItems: 'center',
        whiteSpace: 'nowrap',
        flex: 1
    },
    button: {
        padding: '8px 15px'
    },
    menuIcon: {
        extend: '$figure',
        width: 40,
        height: 40,
        display: 'none'
    },
    navHeader: {
        display: 'none'
    },
    arrow: {
        display: 'none'
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        container: {
            justifyContent: 'center',
        },
        linksWrapper: {
            justifyContent: 'center'
        },
        figure: {
            marginTop: 16
        }
    },
    ...mobileStyles(theme)
});

class MainNav extends Component {
    state = {
        opened: false
    };

    openNav = () => {
        if (this.state.opened) {
            this.props.toggleNav(!this.props.navOpen);
            setTimeout(() => this.setState({opened: false}), 400)
        } else {
            this.setState({opened: true});
            this.props.toggleNav(!this.props.navOpen);
        }
    };

    render() {
        const {classes} = this.props;
        let navClass;
        if(this.state.opened) {
            navClass = this.props.navOpen ? classes.navShow + ' ' + classes.nav : classes.navHide + ' ' + classes.nav;
        } else {
            navClass = this.props.navOpen ? classes.navShow + ' ' + classes.nav : classes.nav;
        }
        const linkList = ['Pools & Spas', 'Supplies', 'Resources', 'Services'];
        return (
            <section className={classes.root}>
                <Container className={classes.container}>
                    <figure className={classes.figure}>
                        <img className={classes.img} src="images/pool-pros-logo.png" alt="pool-props-logo"/>
                    </figure>
                    <section className={classes.linksWrapper}>
                        <nav className={navClass}>
                            <header>
                                <Text className={classes.navHeader}
                                      weight={'medium'}
                                      type={'subtitle'}>
                                    <span>Menu</span>
                                    <span onClick={this.openNav}
                                          className={classes.close}>&times;</span>
                                </Text>
                            </header>
                            {linkList.map(link => {
                                return (
                                    <Text key={link} className={classes.links}
                                          weight={'medium'}
                                          component={Link}
                                          to={`/${link.replace(/\s+/g, '')}`}><span>{link}</span>
                                        <figure className={classes.arrow}>
                                            <img className={classes.img} src="images/next-arrow.png"
                                                 alt="pool-props-logo"/>
                                        </figure>
                                    </Text>
                                )
                            })}
                        </nav>
                        <Button className={classes.button}
                                text={<span>Find a <span className={classes.pro}>Pool</span> Pro</span>}
                                icon={'mapMarker'}
                                light/>
                        <figure className={classes.menuIcon} onClick={this.openNav}>
                            <img className={classes.img} src="images/menu-icon-mobile.png" alt="pool-props-logo"/>
                        </figure>
                    </section>
                </Container>
            </section>
        );
    }
}

export default connect(({ui}) => ({navOpen: ui.nav}), {toggleNav})(injectSheet(styles)(MainNav))