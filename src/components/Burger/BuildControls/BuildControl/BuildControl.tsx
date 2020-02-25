import React, {FunctionComponent as FN} from 'react';
import classes from './BuildControl.module.css';

type BuildControlType = {
    label:string,
    type: string,
    add: any,
    rem: any
};

const BuildControl : FN<BuildControlType> = (props:BuildControlType) => {

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={props.rem} className={classes.Less}>Less</button>
            <button onClick={props.add} className={classes.More}>More</button>
        </div>
    );
};

export default BuildControl;