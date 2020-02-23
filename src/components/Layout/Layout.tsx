import React from 'react';
import { FunctionComponent as FN } from 'react';
import Aux from '../../hoc/aux';
import classes from './Layout.module.css';

const layout : FN = (props:any) => (
    <Aux>
        <div>Toolbar, SideBar, BackDrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;