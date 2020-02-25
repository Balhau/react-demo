import React, {FunctionComponent as FN} from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl';

type BuildControlsType = {
    addIngredient : any,
    remIngredient : any,
    currentPrice : number,
    purchaseable: boolean,
    reset:any
}



const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
];

const BuildControls : FN<BuildControlsType> = (props:BuildControlsType) => {
    return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>{props.currentPrice}</strong></p>
                {controls.map(
                    (crtl) => {
                        return <BuildControl 
                                add={()=>props.addIngredient(crtl.type)} 
                                rem={()=>props.remIngredient(crtl.type)}  
                                key={crtl.label} 
                                label={crtl.label} 
                                type={crtl.type}
                            />
                    }
                )}
                <button onClick={props.reset} className={classes.ResetButton}>Reset</button>
                <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
            </div>
    )
}

export default BuildControls;