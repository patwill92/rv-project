import React from 'react';
import injectSheet from 'react-jss';

import Text from '../../Text'
import Container from '../../Container'
import Icon from '../../Icon'

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary,
    },
    container: {
        extend: theme.rowEnd
    },
    links: {
        color: '#fff',
        marginLeft: 60,
        padding: '13px 0',
        '& path': {
            fill: '#fff'
        }
    },
    '@media (max-width: 767px)': {
        root: {
            display: 'none'
        }
    }
});

const TopBar =  ({classes}) => (
    <section className={classes.root} >
        <Container className={classes.container} component='nav'>
            <Text className={classes.links} type={'caption'}>Dealers and Distributors</Text>
            <Text className={classes.links} type={'caption'}>
                Commercial Service <Icon name={'shareSquare'} style={{marginLeft: 5, top: 1}}/>
            </Text>
        </Container>
    </section>
);

export default injectSheet(styles)(TopBar)