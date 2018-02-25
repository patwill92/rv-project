import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../../../components/Container'
import Dealer from './DealerCard'

const styles = {
    root: {
        paddingTop: 50,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '15px'

    },
    '@media (max-width: 991px)': {
        root: {
            gridTemplateColumns: 'repeat(2,1fr)',
        }
    },
    '@media (max-width: 767px)': {
        root: {
            gridTemplateColumns: '1fr',
        }
    }
};

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