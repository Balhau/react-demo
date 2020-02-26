import React from 'react';
import classes from './Button.module.css';

type ButtonTypes = {
    btnType:string,
    clicked: () => void
    children: any
}

const button = (props:ButtonTypes) => {
    return (
        <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(" ")}>
            {props.children}
        </button>
    )
}

export default button;