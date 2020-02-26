import React from 'react';
import classes from './DrawerToggle.module.css';

type DrawerToggleProps = {
    clicked : () => void;
}

const drawerToggle = (props:DrawerToggleProps) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )    
}

export default drawerToggle;