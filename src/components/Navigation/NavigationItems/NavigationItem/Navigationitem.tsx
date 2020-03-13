import React from 'react';
import classes from './NavigationItem.module.css';
import {Link} from 'react-router-dom'

type NavigationItemProps = {
    link: string,
    active?:boolean,
    children?: any
}

const navigationItem = (props:NavigationItemProps) => {
    
    const activeValue=props.active?.valueOf();
    const activeClass : any = activeValue 
                            ? classes.active 
                            : null;
                            
    return (
        <li className={classes.NavigationItem}>
            <Link className={activeClass} to={props.link}>{props.children}</Link>
        </li>
    )
}

export default navigationItem;