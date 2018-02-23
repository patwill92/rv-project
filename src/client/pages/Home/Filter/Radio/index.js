import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Text from '../../../../components/Text'
import mobileStyles from './mobileStyles'
import {filterDealers} from "../../../../../redux/actions";

const styles = theme => ({
    root: {
        color: theme.palette.darkGrey,
        lineHeight: '100%',
        alignItems: 'center',
        extend: theme.rowBetween,
        marginLeft: '0.5em'
    },
    radio: {
        height: 20,
        width: 20,
        borderRadius: 5,
        display: 'inline-block',
        cursor: 'pointer',
        marginRight: 10,
        backgroundColor: '#fff',
        border: '1px solid #d8d8d8',
        '&:checked': {
            border: `7px solid ${theme.palette.primaryLight}`,
        },
        '&:focus': {
            outline: 'none'
        },
        '-webkit-appearance': 'none'
    },
    toolTip: {
        height: 19,
        width: 19,
        margin: 0,
        marginLeft: 10,
        backgroundColor: '#E5E4E5',
        borderRadius: 2,
        alignSelf: 'center',
        extend: theme.rowCenter,
        '& img': {
            width: 'auto',
            height: 19
        },
        display: 'inline-block'
    },
    ...mobileStyles(theme)
});

const Radio = props => {
    const {classes, text, i, service} = props;
    return (
        <label className={classes.root} htmlFor={service}>
            <input value={text.toLowerCase()}
                   type="checkbox"
                   checked={props.filters.includes(text.toLowerCase())}
                   className={classes.radio}
                   onChange={(e) => {
                       props.filterDealers({
                           action: e.target.checked,
                           value: e.target.value,
                           currentQuery: props.filters,
                           dealers: props.dealers
                       })
                   }}/>
            <Text type={'caption'} weight={'medium'} component={'span'} className={classes.text}>{text}</Text>
            {i && <figure className={classes.toolTip}>
                <img src="images/tool-tip-icon-filtering.png" alt=""/>
            </figure>}
        </label>
    )
};

export default connect(({ui}) => ({filters: ui.home.filters, list: ui.home.list, dealers: ui.home.dealers}), {filterDealers})(injectSheet(styles)(Radio))