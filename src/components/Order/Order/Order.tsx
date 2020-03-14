import React from 'react';
import classes from './Order.module.css';

const Order = (props : any) =>{

    const keys = Object.keys(props.order.ingredients);
    const label_ing = keys.map((ing:any) => ""+ing+" ("+props.order.ingredients[ing]+")").join(" ");

    return (
        <div className={classes.Order}>
            <p>Ingredients: {label_ing}</p>
            <p>Total Price: <strong>USD {props.order.totalPrice}</strong></p>
        </div>
    )
}

export default Order;