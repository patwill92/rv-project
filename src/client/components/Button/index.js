import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Text from '../Text'
import Icon from '../Icon'

const styles = theme => ({
    root: {
        extend: props => props.light ? theme.button.primaryLight : theme.button.primary,
        '& path': {
            fill: props => props.light ? '#386BD8' : '#073d8b',
        },
        '& *': {
            color: props => props.light ? '#386BD8' : '#073d8b'
        },
        cursor: 'pointer',
        '&:active': {
            outline: 0
        },
        '&:focus': {
            outline: 0
        }
    },
    text: {
        display: 'inline-block',
        whiteSpace: 'nowrap'
    }
});

const Button = props => {
    const {icon, text, className, classes} = props;
    const buttonClass = className ? classes.root + ' ' + className : classes.root;
    return (
        <button className={buttonClass}>
            {icon && <Icon name={icon} style={{marginRight: 5}}/>}
            <Text className={classes.text} component={'span'}>{text}</Text>
        </button>
    )
};

Button.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.element.isRequired
    ]),
    className: PropTypes.string,
    icon: PropTypes.string,
    light: PropTypes.bool
};

export default injectSheet(styles)(Button);