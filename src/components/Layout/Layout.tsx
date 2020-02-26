import React, { useState } from 'react';
import { FunctionComponent as FN } from 'react';
import {Aux} from '../../hoc';
import Toolbar from '../Navigation/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer';

const Layout : FN = (props:any) => {

    const [visibleDrawer,setVisibleDrawer]=useState<boolean>(false)

    const sideDrawerClosedHandler = () => setVisibleDrawer(false);

    const sideDrawerToggleHandler = () => setVisibleDrawer(!visibleDrawer);

    return (
    <Aux>
        <Toolbar clicked={sideDrawerToggleHandler}/>
        <SideDrawer clicked={sideDrawerClosedHandler} show={visibleDrawer}/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);}

export default Layout;