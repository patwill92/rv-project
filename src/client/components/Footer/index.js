import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import Container from '../Container'
import Icon from '../Icon'
import Text from '../Text'

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary,
        paddingTop: 35,
        paddingBottom: 30,
    },
    figure: {
        margin: [0, 'auto', 10, 'auto'],
        maxWidth: 200,
        '& img': {
            width: '100%',
            height: 'auto'
        }
    },
    socialText: {
        color: '#fff',
        ...theme.rowCenter,
        alignItems: 'center'
    },
    icons: {
        composes: '$socialText',
        '& path': {
            fill: '#fff'
        },
        '& span': {
            margin: [0, 5]
        },
        marginLeft: 20
    },
    legal: {
        backgroundColor: theme.palette.primaryLight,
        composes: '$socialText',
        padding: [10,15],
        alignItems: 'stretch'
    },
    separator: {
        backgroundColor: '#fff',
        width: 1,
        margin: [0,10],
    },
    '@media (max-width: 767px)': {
        social: {
            transform: 'scale(0.8)'
        },
        figure: {
            transform: 'scale(0.8)'
        },
        separator:{
            transform: 'scale(0.9)',
            margin: [0,5]
        },
        legalText: {
            transform: 'scale(0.9)'
        },
        root: {
            paddingTop: 25,
            paddingBottom: 20,
        },
    }
});

const Footer = props => {
    const {classes, modal} = props;
    const legal = ['2017 pool pros', 'privacy policy', 'terms & conditions'];
    return (
        <footer style={{gridArea: 'footer'}}>
            <Container padding component={'section'} className={classes.root} style={{paddingRight: modal ? 32 : 15}}>
                <figure className={classes.figure} >
                    <img src="images/pool-pros-logo-footer.png" alt=""/>
                </figure>
                <div className={classes.social} >
                    <Text weight={'medium'} uppercase className={classes.socialText} component={'div'}>
                        connect with us
                        <div className={classes.icons}>
                            {['twitter', 'facebook', 'youtube'].map(link => {
                                return (
                                    <Icon name={link} key={link}/>
                                )
                            })}
                        </div>
                    </Text>
                </div>
            </Container>
            <Container className={classes.legal} padding component={'footer'} style={{paddingRight: modal ? 32 : 15}}>
                {legal.map((text, i) => {
                    let separate = i < legal.length - 1;
                    return (
                        <Fragment key={text}>
                            <Text capitalize type={'caption'} weight={'light'}
                                  className={classes.legalText}>{i===0 && <span style={{marginRight: 5}}>&#9400;</span>}{text}</Text>
                            {separate && <div className={classes.separator}/>}
                        </Fragment>
                    )
                })}
            </Container>
        </footer>
    )
};

export default injectSheet(styles)(Footer)