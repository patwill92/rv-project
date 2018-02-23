import React from 'react'

import TopBar from './TopBar'
import MainNav from './MainNav'

const NavBar = ({modal}) => {
    return (
        <header style={{gridArea: 'nav'}}>
            <TopBar modal={{modal}}/>
            <MainNav modal={modal}/>
        </header>
    )
};

export default NavBar