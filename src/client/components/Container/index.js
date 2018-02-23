import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const breakpoints = [[576, 540], [768, 750], [992, 960], [1200, 1140]];
const styles = theme => ({
    root: {
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    paddingOnly: {
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15,
    },
    ...theme.mediaQueries('root', breakpoints)
});

const Container = props => {
    const {classes, children, className, component, padding, style} = props;
    let textClass = className ? classes.root + ' ' + className : classes.root;
    textClass = padding ? classes.paddingOnly + ' ' + className : textClass;
    if (component) {
        return React.createElement(component, {className: textClass, style}, children)
    }
    return (
        <div className={textClass} style={style ? style : null}>{children}</div>
    )
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.string,
    padding: PropTypes.bool
};

export default injectSheet(styles)(Container)