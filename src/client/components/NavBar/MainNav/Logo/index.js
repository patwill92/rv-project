import React from 'react';
import {withRouter} from 'react-router-dom'

const Logo = ({history, classes}) => (
    <figure onClick={() => history.push('/')}
        className={classes.figure}>
        <img className={classes.img} src="images/pool-pros-logo.png" alt="pool-props-logo"/>
    </figure>
);

export default withRouter(Logo);

