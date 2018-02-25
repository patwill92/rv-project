import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Head from '../../components/Head'
import Filter from './Filter'
import Dealers from './Dealers'
import Container from '../../components/Container'
import {getDealers, homeUI} from "../../../redux/actions";
import query from '../../../helpers/query'

const styles = {
    root: {
        paddingTop: 120,
        paddingBottom: 100,
        backgroundImage: 'url("images/water-image.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        gridArea: 'main',
        backgroundColor: '#fff'
    },
    '@media (min-width: 992px)': {
        root: {
            backgroundSize: '100%'
        },
    },
    '@media (max-width: 767px)': {
        root: {
            paddingTop: 80,
            paddingBottom: 60
        }
    }
};

class Home extends Component {
    componentDidMount = () => {
        this.props.getDealers();
    };

    render() {
        const {classes} = this.props;
        return (
            <Head name={'Home'} url={''}>
                <main className={classes.root}>
                    <Container component={'section'}>
                        <Filter/>
                    </Container>
                    <Dealers/>
                </main>
            </Head>
        )
    };
}

const loadData = fs => {
    let {dealers} = JSON.parse(fs.readFileSync('src/data/dealers.json'));
    const {queryDealers} = query();
    return [
        {
            data: {dropDown: false, ...queryDealers(['service', 'installation', 'residential'], dealers), dealers},
            func: homeUI
        }
    ]
};

export default {
    component: connect(null, {getDealers})(injectSheet(styles)(Home)),
    loadData
}