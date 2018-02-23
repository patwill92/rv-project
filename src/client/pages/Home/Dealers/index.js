import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../../../components/Container'
import Dealer from './DealerCard'

const styles = theme => ({
    root: {
        extend: theme.rowBetween,
        alignItems: 'top',
        flexWrap: 'wrap',
        paddingTop: 50
    }
});

const Dealers = props => {
    const {classes, dealers} = props;
    return (
        <Container className={classes.root} component={'main'}>
            {dealers.map(({data}) => {
                return <Dealer dealer={data} key={data.name}/>
            })}
        </Container>
    )
};

export default connect(({ui}) => ({dealers: ui.home.list}))(injectSheet(styles, {link: true})(Dealers));