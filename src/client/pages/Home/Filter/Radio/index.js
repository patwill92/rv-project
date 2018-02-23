import React, {Component} from 'react'
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
        marginLeft: '0.5em',
        position: 'relative'
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
        display: 'inline-block',
        position: 'relative'
    },
    toolTipMessage: {
        width: 150,
        color: theme.palette.darkGrey,
        position: 'absolute',
        backgroundColor: theme.palette.lightGrey,
        padding: 10,
        bottom: 'calc(100% + 5px)',
        boxShadow: theme.shadows[2],
        transition: 'opacity 0.5s ease'
    },
    ...mobileStyles(theme)
});

class Radio extends Component {
    state = {
        toolTip: false
    };

    handleIn = () => {
        this.setState({toolTip: false})
    };

    handleOut = () => {
        this.setState({toolTip: true})
    };

    handleTool = () => {
        this.setState({toolTip: !this.state.toolTip})
    };

    render() {
        const {classes, text, i, service, dealers, filters} = this.props;
        const {toolTip} = this.state;
        return (
            <label className={classes.root} htmlFor={service}>
                <input value={text.toLowerCase()}
                       type="checkbox"
                       checked={filters.includes(text.toLowerCase())}
                       className={classes.radio}
                       onChange={(e) => {
                           this.props.filterDealers({
                               action: e.target.checked,
                               value: e.target.value,
                               currentQuery: filters,
                               dealers
                           })
                       }}/>
                <Text type={'caption'} weight={'medium'} component={'span'} className={classes.text}>{text}</Text>
                {i && <figure className={classes.toolTip}>
                    <Text type={'caption'}
                          className={classes.toolTipMessage}
                          style={{opacity: toolTip ? 1 : 0}}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.</Text>
                    <img onMouseOver={this.handleOut}
                         onClick={this.handleTool}
                         onMouseOut={this.handleIn} src="images/tool-tip-icon-filtering.png" alt=""/>
                </figure>}
            </label>
        )
    };
}

export default connect(({ui}) => ({
    filters: ui.home.filters,
    list: ui.home.list,
    dealers: ui.home.dealers
}), {filterDealers})(injectSheet(styles)(Radio))