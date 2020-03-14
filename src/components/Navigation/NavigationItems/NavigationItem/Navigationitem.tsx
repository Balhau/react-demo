import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom'

type NavigationItemProps = {
    link: string,
    active?:boolean,
    children?: any
}

const navigationItem = (props:NavigationItemProps) => {                         
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                activeClassName={classes.active} 
                exact
                to={props.link}>{props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem;