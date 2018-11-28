import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Vote</a></li>
            <li><a href="/contact">Enter Story</a></li>
            <li><a href="/myStory">Edit Story</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;