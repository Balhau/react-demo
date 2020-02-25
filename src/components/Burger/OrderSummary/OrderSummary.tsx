import React from 'react';
import {Aux} from '../../../hoc';
import { Ingredient }  from '../../../containers/BurgerBuilder/BurgerBuilder';

type OrderSummaryType = {
    ingredients : Ingredient
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
            <p>Your order</p>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    )
};

export default orderSummary;