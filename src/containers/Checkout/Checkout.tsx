import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../../components/Order/ContactData';

const Checkout = (props:any) => {
    console.log(props);
    
    const urlParams = new URLSearchParams(props.location.search);

    let ingredients : any = {};
    let price : Number = 0;

    urlParams.forEach((value,key) => { 
        if(key==='totalPrice'){
            price=Number(value);
        }else{
            ingredients[key]=Number(value);
        }
    });

    const [state,setState]=useState<any>({
        price : price,
        ingredients : ingredients
    });

    const contactData = () => {
         return (
            <ContactData 
                ingredients={state.ingredients} 
                price={state.price}
            />
        )
    }

    return (
        <div>
            <CheckoutSummary 
                ingredients={state.ingredients}
            />
            <Route path={"/checkout-order"} render={contactData} />
        </div>
    );
};

export default Checkout;