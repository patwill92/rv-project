import React from 'react'

import TopBar from './TopBar'
import MainNav from './MainNav'

const NavBar = () => {
    return (
        <header style={{gridArea: 'nav'}}>
            <TopBar />
            <MainNav />
        </header>
    )
};

export default NavBar