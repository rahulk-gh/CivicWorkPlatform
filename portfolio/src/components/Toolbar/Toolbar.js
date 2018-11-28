import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            
            <div className="spacer" />
            
            <div className="toolbar_naviation-items-right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Vote</a></li>
                    <li><a href="/contact">Enter Story</a></li>
                    <li><a href="/myStory">Edit Story</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;


