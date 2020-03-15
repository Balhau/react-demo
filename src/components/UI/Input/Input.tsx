import React from 'react';
import classes from './Input.module.css';
import Aux from '../../../hoc/aux';

const Input = (props:any) => {

    let inputElement = null;

    const buildSelect = (props:any) => {
        const options = props.elementconfig.options.map(
            (option:any) => (
                <option key={option.value} value={option.value}>
                    {option.displayValue}
                </option>
            )
        );

        return (
            <select onChange={props.changed} className={classes.InputElement} >
                {options}
            </select>
        );
    };

    let inputClass:any = props.valid ? [classes.InputElement, classes.Valid] : [classes.InputElement, classes.Invalid]
    inputClass=inputClass.join(" ");

    console.log(props);


    switch(props.elementtype){
        case ('input'):
            inputElement=<input onChange={props.changed} className={inputClass} {...props.elementconfig} value={props.value}/>
            break;
        case ('textarea'):
            inputElement=<textarea onChange={props.changed} className={inputClass} {...props.elementconfig} value={props.value}/>
            break;
        case ('select'):
            inputElement=buildSelect(props)
            break;
        default:
            inputElement=<input onChange={props.changed} className={inputClass} {...props.elementconfig}/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}></label>
            {inputElement}
        </div>
    )
}

export default Input;