import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../../hoc/aux';

type SideDrawerProps = {
    show: boolean;
    clicked: ()=>void;
}

const sideDrawer = (props:SideDrawerProps)=>{
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
        <Backdrop clicked={props.clicked} show={props.show}/>
        <div className={attachedClasses.join(" ")}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </Aux>
    );
} 

export default sideDrawer;