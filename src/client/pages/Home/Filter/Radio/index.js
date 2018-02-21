import React from 'react'
import injectSheet from 'react-jss'

import Text from '../../../../components/Text'
import mobileStyles from './mobileStyles'

const styles = theme => ({
    root: {
        color: theme.palette.darkGrey,
        lineHeight: '100%',
        extend: theme.rowBetween,
        alignItems: 'center',
        marginLeft: '1em'
    },
    radioActive: {
        backgroundColor: theme.palette.primaryLight,
        height: 20,
        width: 20,
        borderRadius: 5,
        display: 'inline-block',
        cursor: 'pointer',
        marginRight: 10,
        '& span': {
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            transform: 'scale(0.3)',
            borderRadius: 3,
            display: 'inline-block',
        }
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
        }
    },
    ...mobileStyles(theme)
});

const Radio = props => {
    const {classes, text, i} = props;
    return (
        <Text type={'caption'} className={classes.root}>
            <span className={classes.radioActive}>
                <span/>
            </span>
            {text}
            {i && <figure className={classes.toolTip}>
                <img src="images/tool-tip-icon-filtering.png" alt=""/>
            </figure>}
        </Text>
    )
};

export default injectSheet(styles)(Radio)