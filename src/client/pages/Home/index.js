import React from 'react'
import injectSheet from 'react-jss'

import Filter from './Filter'
import {getDealers, homeUI} from "../../../redux/actions";

const styles = {
    root: {
        paddingTop: 120
    }
};

const Home = props => {
    const {classes} = props;
    return (
        <main className={classes.root}>
            <Filter/>
        </main>
    )
};

const loadData = fs => {
    let {dealers} = JSON.parse(fs.readFileSync('src/data/dealers.json'));
    return [
        {
            data: dealers,
            func: getDealers
        },
        {
            data: {dropDown: false},
            func: homeUI
        }
    ]
};

export default {
    component: injectSheet(styles)(Home),
    loadData
}