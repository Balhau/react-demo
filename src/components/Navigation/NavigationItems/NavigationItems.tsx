import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props:any) => {
   return( 
        <ul className={classes.NavigationItems}>
            <NavigationItem active={true} link="/">BurgerBuilder</NavigationItem>
            <NavigationItem link="/checkout">Checkout</NavigationItem>
        </ul>
        )
};

export default navigationItems;