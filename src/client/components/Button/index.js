import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Text from '../Text'
import Icon from '../Icon'

const styles = theme => ({
    basic: {
        borderRadius: '3px',
        backgroundColor: 'rgba(0,0,0,0)',
        cursor: 'pointer',
        '&:active': {
            outline: 0
        },
        '&:focus': {
            outline: 0
        }
    },
    light: {
        composes: '$basic',
        border: `1px solid ${theme.palette.primaryLight}`,
        '& path': {
            fill: theme.palette.primaryLight,
        },
        '& *': {
            color: theme.palette.primaryLight
        },
    },
    primary: {
        composes: '$basic',
        border: `1px solid ${theme.palette.secondary}`,
        '& path': {
            fill: theme.palette.primary,
        },
        '& *': {
            color: theme.palette.primary
        },
    },
    text: {
        whiteSpace: 'nowrap',
        ...theme.rowCenter,
        alignItems: 'center',
    }
});

const Button = props => {
    const {icon, text, className, classes, light, onClick} = props;
    let buttonClass = light ? classes.light : classes.primary;
    buttonClass = className ? buttonClass + ' ' + className : buttonClass;
    return (
        <button className={buttonClass} onClick={onClick}>
            <Text className={classes.text} component={'span'} weight={'medium'}>
                {icon && <Icon name={icon} style={{marginRight: 5}}/>}
                {text}
            </Text>
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
    light: PropTypes.bool,
    onClick: PropTypes.func
};

export default injectSheet(styles)(Button);