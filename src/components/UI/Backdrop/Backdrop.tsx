import React from 'react';
import classes from './Backdrop.module.css';

type BackdropProps = {
    show: boolean
    clicked: ()=>void;
}

const backdrop = (props:BackdropProps) => {
    return props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div> : null
}

export default backdrop;