import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props:any) => (
    <div className={classes.Logo}>
        <img alt={"Burger logo"} src={burgerLogo}/>
    </div>
)

export default logo;