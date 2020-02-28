import React from 'react';
import {Aux} from '../../../hoc';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';

type ModalPropType = {
    show?: boolean;
    children?: any;
    modelClosed?: ()=>void;
}

const modal = (props:ModalPropType) => {
    const classStatus = props.show ? classes.Show : classes.Hide;
    return(<Aux>
            <Backdrop clicked={props.modelClosed ? props.modelClosed : ()=>{}} show={props.show ? props.show:false}/>
            <div className={ [classes.Modal, classStatus].join(" ") }>
                {props.children}
            </div>
        </Aux>
    )
};

export default modal;