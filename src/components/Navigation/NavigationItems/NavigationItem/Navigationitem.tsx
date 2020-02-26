import React from 'react';
import classes from './NavigationItem.module.css';

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
            <a 
                className={activeClass} 
                href={props.link}>{props.children}</a>
        </li>
    )
}

export default navigationItem;