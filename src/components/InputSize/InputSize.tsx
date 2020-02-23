import React, {FunctionComponent as FN, useState, ChangeEvent} from 'react';

type InputSizeProps ={
    label: string
}

export const InputSize : FN<InputSizeProps> = (props) => {
    const [inputText,setText] = useState("");

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const text =  event.target.value;
        setText(text);
    };

    return (
        <div>
            <label>{props.label}: </label>
            <input onChange={onChangeHandler} value={inputText}></input>
            <label>{inputText.length} chars</label>
            <p>{inputText}</p>
        </div>
    )
}