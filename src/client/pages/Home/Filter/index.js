import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Icon from '../../../components/Icon'
import Radio from './Radio'
import mobileStyles from './mobileStyles'
import {homeUI} from "../../../../redux/actions";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.lightGrey,
        extend: theme.rowCenter,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        position: 'relative'
    },
    subContainer: {
        extend: theme.rowBetween,
        alignItems: 'center',
    },
    filterContainer: {
        extend: theme.rowCenter,
        alignItems: 'center'
    },
    title: {
        color: theme.palette.primaryLight
    },
    filter: {
        color: theme.palette.darkGrey,
    },
    separator: {
        backgroundColor: '#ebebeb',
        margin: '0 1em',
        transformOrigin: 'center',
        height: 52,
        minWidth: 1,
    },
    dropdown: {
        display: 'none'
    },
    '@media (max-width: 991px)': {
        title: {
            fontSize: 15
        },
        filter: {
            fontSize: 15
        },
    },
    ...mobileStyles(theme)
});

const Filter = props => {
    const {classes, home, homeUI} = props;
    const dealerTypes = ['Service', 'Installation', 'Residential', 'Commercial'];
    return (
        <Container className={classes.root} component={'section'}>
            <div className={classes.subContainer}>
                <Text className={classes.title} type={'subtitle'} component={'div'} weight={'medium'}>7 dealers in
                    28226</Text>
                <div className={classes.separator}/>
                <Text className={classes.filter} type={'subtitle'} component={'div'} weight={'medium'}>
                    <span className={classes.filterText}>Filter Results</span>
                    <div onClick={() => props.homeUI({dropDown: !home.dropDown})}
                         className={classes.dropdown}>
                        <Icon name={'caretDown'} className={classes.icon}/>
                    </div>
                </Text>

            </div>
            <div className={classes.filterContainer}>
                {dealerTypes.map((type, i) => {
                    let final = i >= dealerTypes.length - 1;
                    return (
                        <Radio text={type} key={type} i={final}/>
                    )
                })}
            </div>
        </Container>
    )
};

export default connect(({ui}) => ({home: ui.home}), {homeUI})(injectSheet(styles)(Filter))