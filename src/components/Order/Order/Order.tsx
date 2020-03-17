import React from 'react';
import classes from './Order.module.css';
import { ContactInfo } from './ContactInfo/ContactInfo';

const Order = (props : any) =>{

    console.log(props.order);
    const keys = Object.keys(props.order.ingredients);
    const ingredients = keys.map((ing:any) => (
        <div className={classes.Ingredient}>
            <strong>{ing}</strong> - ({props.order.ingredients[ing]})
        </div>)
    );

    return (
        <div className={classes.Order}>
            <p>Ingredients:</p>
            {ingredients}
                <ContactInfo contact={props.order} />
            <p>Total Price: <strong>USD {props.order.totalPrice}</strong></p>
        </div>
    )
}

export default Order;