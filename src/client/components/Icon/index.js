import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'

const styles = {
    root: {
        display: 'inline-flex',
        alignSelf: 'center',
        position: 'relative',
        height: '1em',
        width: '1em',
        zIndex: 0
    },
    svg: {
        height: '1em',
        width: '1em'
    }
};

const Icon = props => {
    const {classes, style, className} = props;
    const icon = require('./iconList')[props.name];
    const {name, path, viewBox} = icon;
    return (
        <span id={`svg-icon-${props.name}`}
              className={className ? classes.root + ' ' + className : classes.root}
              style={style}>
              <svg className={classes.svg} id={name} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
                <path d={path}/>
              </svg>
        </span>
    )
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};

export default injectSheet(styles)(Icon)