import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const fontSize = (size) => {
    switch (size) {
        case 'title':
            return 26;
        case 'subtitle':
            return 18;
        case 'caption':
            return 12;
        default:
            return 15;
    }
};

const fontWeight = (weight) => {
    switch (weight) {
        case 'extraBold':
            return 800;
        case 'bold':
            return 700;
        case 'medium':
            return 600;
        case 'light':
            return 300;
        default:
            return 400;
    }
};

const styles = theme => ({
    root: {
        fontSize: props => fontSize(props.type),
        fontWeight: props => fontWeight(props.weight),
        fontStyle: props => props.italic ? 'italic' : 'normal'
    }
});

export const Text = props => {
    const {classes, children, type, component, className, to} = props;
    const textClass = className ? classes.root + ' ' + className : classes.root;
    const parentProps = {className: textClass, to};
    if (component) {
        return React.createElement(component, {...parentProps}, children)
    }
    switch (type) {
        case 'title':
            return (
                <h2 className={textClass}>{children}</h2>
            );
        case 'subtitle':
            return (
                <h3 className={textClass}>{children}</h3>
            );
        case 'caption':
            return (
                <div className={textClass}>{children}</div>
            );
        default:
            return (
                <p className={textClass}>{children}</p>
            );
    }
};

Text.propTypes = {
    weight: PropTypes.string,
    italic: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    to: PropTypes.string
};

export default injectSheet(styles)(Text)