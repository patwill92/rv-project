import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const breakpoints = [[576, 540], [768, 720], [992, 960], [1200, 1140]];
const styles = theme => ({
    root: {
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    ...theme.mediaQueries('root', breakpoints)
});

const Container = props => {
    const {classes, children, className, component} = props;
    const textClass = className ? classes.root + ' ' + className : classes.root;
    if(component) {
        return React.createElement(component, {className: textClass}, children)
    }
    return (
        <div className={textClass}>{children}</div>
    )
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.string,
};

export default injectSheet(styles)(Container)