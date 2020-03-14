import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './NavigationItems.module.css';

//<NavigationItem link='/bookmarks'>Bookmarks</NavigationItem>

const navigationItems = (props:any) => {
   return( 
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">BurgerBuilder</NavigationItem>
            <NavigationItem link='/orders'>Orders</NavigationItem>
        </ul>
        )
};

export default navigationItems;