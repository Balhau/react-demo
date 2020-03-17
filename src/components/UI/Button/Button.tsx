import React from 'react';
import classes from './Button.module.css';


const button = (props:any) => {

    let btnClasses = [classes.Button, classes[props.btnType]];

    if(props.disabled){
        btnClasses.push(classes.Disabled);
    }

    return (
        <button disabled={props.disabled} onClick={props.clicked} className={btnClasses.join(" ")}>
            {props.children}
        </button>
    )
}

export default button;