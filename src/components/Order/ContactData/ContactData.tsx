import React, { useState } from 'react';
import Button from '../../UI/Button';
import {withRouter} from 'react-router-dom';
import classes from './ContactData.module.css';
import axios from '../../../utils/axios-orders';
import Spinner from '../../UI/Spinner';

const ContactData = (props:any) => {
    const [state,setState] = useState({
        loading: false,
        ingredients: props.ingredients,
        price: props.price,
        name:'',
        email:'',
        address:{
            street: '',
            postalCode: ''
        },
    });

    const orderBurger = (event:Event) => {
        event.preventDefault();
        setState({...state,loading:true})
        const postData = {
            ingredients : state.ingredients,
             totalPrice: state.price,
             customer: {
                 name: "Buceta Gostosa",
                 address: {
                     street: "La Cona del Madre",
                     zipCode: "696969",
                     country: "Bucetings"
                 },
                 email: "buceta@buceta.pila",
                 deliveryMethod: "penetration"
             }
         }

         axios.post("/orders.json",postData)
             .then(response =>{
                 setState({...state,loading:false})
             });
    }

    let form = null;

    if(state.loading){
        form = <Spinner />
    }else {
        form =(
            <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                    <input className={classes.Input} type="text" name="postalCode" placeholder="Your postal code" />
                    <Button clicked={orderBurger} btnType="Success">ORDER</Button>
            </form>
        );
    }

    return (
        <div className={classes.ContactData}>
                <h4>Enter your contact data:</h4>
                {form}
        </div>
    );
};



export default withRouter(ContactData);