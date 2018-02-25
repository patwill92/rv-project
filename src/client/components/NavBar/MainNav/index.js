import React, {Component} from 'react';
import injectSheet from 'react-jss';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Text from '../../Text'
import Container from '../../Container'
import Button from '../../Button'
import Logo from './Logo'
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
        flexWrap: 'wrap',
    },
    links: {
        color: theme.palette.primary,
        padding: '0px 15px',
        textDecoration: 'none',
        display: 'inline-block',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        transition: 'transform 0.2s ease'
    },
    figure: {
        maxWidth: 216,
        margin: 0,
        cursor: 'pointer'
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
        maxWidth: 50,
        maxHeight: 50,
        minWidth: 40,
        minHeight: 40,
        display: 'none',
        extend: theme.colCenter,
        margin: 0
    },
    navHeader: {
        display: 'none'
    },
    arrow: {
        display: 'none'
    },
    nav: {
        flexBasis: '60%',
        extend: theme.rowBetween,
        alignItems: 'center',
        padding: '30px 0px',
        marginRight: 30
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        container: {
            justifyContent: 'center',
        },
        linksWrapper: {
            justifyContent: 'space-between'
        },
        figure: {
            marginTop: 16
        },
        nav: {
            flex: 1
        }
    },
    ...mobileStyles(theme)
});

class MainNav extends Component {
    state = {
        opened: false,
        width: ''
    };

    componentDidMount = () => {
        window.addEventListener('resize', () => {
            this.setState({width: window.innerWidth});
            if (this.state.width >= 768) {
                this.setState({opened: false});
                this.props.toggleNav(false);
            }
        })
    };

    openNav = () => {
        if (this.state.width < 768) {
            if (this.state.opened) {
                this.props.toggleNav(!this.props.navOpen);
                setTimeout(() => this.setState({opened: false}), 400)
            } else {
                this.setState({opened: true});
                this.props.toggleNav(!this.props.navOpen);
            }
        }
    };

    render() {
        const {classes} = this.props;
        let navClass;
        if (this.state.opened) {
            navClass = this.props.navOpen ? classes.navShow + ' ' + classes.nav : classes.navHide + ' ' + classes.nav;
        } else {
            navClass = this.props.navOpen ? classes.navShow + ' ' + classes.nav : classes.nav;
        }
        const linkList = ['Pools & Spas', 'Supplies', 'Resources', 'Services'];
        return (
            <section className={classes.root}>
                <Container className={classes.container}>
                    <Logo classes={classes}/>
                    <section className={classes.linksWrapper}>
                        <nav className={navClass}>
                            <Text className={classes.navHeader}
                                  weight={'medium'}
                                  component={'header'}
                                  type={'subtitle'}>
                                Menu
                                <span onClick={this.openNav}
                                      className={classes.close}>&times;</span>
                            </Text>
                            {linkList.map(link => {
                                return (
                                    <Text key={link} className={classes.links}
                                          weight={'medium'}
                                          onClick={this.openNav}
                                          component={Link}
                                          to={`/${link.replace(/\s+/g, '').toLowerCase()}`}>
                                        {link}
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