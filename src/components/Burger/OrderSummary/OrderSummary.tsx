import React from 'react';
import {Aux} from '../../../hoc';
import { Ingredient }  from '../../../containers/BurgerBuilder';
import Button from '../../UI/Button';

type OrderSummaryType = {
    ingredients : Ingredient,
    cancelOrder : ()=> void,
    proceedOrder : ()=> void,
    price: number
};

const orderSummary = (props:OrderSummaryType) => {

    const ingredientSummary = Object
        .keys(props.ingredients)
        .map(key => (
            <li>
                <span style={{textTransform:'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>)
        );

    return (
        <Aux>
            <p><strong>Your order</strong></p>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <Button clicked={props.cancelOrder} btnType="Danger">Cancel</Button>
            <Button clicked={props.proceedOrder} btnType="Success">Order</Button>
        </Aux>
    )
};

export default orderSummary;