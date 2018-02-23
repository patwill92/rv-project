import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import helper from './helpers'

const {createClasses, fontSize, fontWeight, weights, sizes, getClassNames} = helper();

const styles = {
    ...createClasses(sizes, fontSize, 'fontSize'),
    ...createClasses(weights, fontWeight, 'fontWeight'),
    italic: {
        fontStyle: 'italic'
    },
    capitalize: {
        textTransform: 'capitalize'
    },
    uppercase: {
        textTransform: 'uppercase'
    }
};

export const Text = props => {
    const {
        children,
        type,
        component,
        className,
        to,
        weight,
        italic,
        classes,
        capitalize,
        uppercase,
        onClick
    } = props;
    let textClass = getClassNames(type, weight, classes, italic, capitalize, uppercase).join(' ');
    textClass = className ? textClass + ' ' + className : textClass;
    const parentProps = {className: textClass, to, onClick};
    if (component) {
        return React.createElement(component, {...parentProps}, children)
    }
    switch (type) {
        case 'title':
            return (
                <h2 {...parentProps}>{children}</h2>
            );
        case 'subtitle':
            return (
                <h3 {...parentProps}>{children}</h3>
            );
        case 'caption':
            return (
                <div {...parentProps}>{children}</div>
            );
        default:
            return (
                <p {...parentProps}>{children}</p>
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
    to: PropTypes.string,
    capitalize: PropTypes.bool,
    uppercase: PropTypes.bool,
    onClick: PropTypes.func
};

Text.defaultProps = {
    type: 'normal',
    weight: 'regular'
};

export default injectSheet(styles, {link: true})(Text)