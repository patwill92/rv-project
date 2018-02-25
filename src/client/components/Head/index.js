import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet'

const Head = ({name, url, children}) => {
    return (
        <Fragment>
            <Helmet>
                <title>{name.toUpperCase()} - POOL PROS</title>
                <meta name={'description'} content={`Pool Pros ${name} page`} />
                <meta property={'og:title'} content={`${name.toUpperCase()} - POOL PROS`} />
                <meta property={'og:description'} content={"The best pool pro finder service around"} />
                <meta property={'og:url'} content={`https://rvproject.herokuapp.com/${url}`} />
                <meta property={'og:image'} content={"https://rvproject.herokuapp.com//images/pool-pros-logo.png"} />
            </Helmet>
            {children}
        </Fragment>
    );
};

Head.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Head;


