import React from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../../components/Order/ContactData';
import {connect} from 'react-redux';

const Checkout = (props:any) => {

    const contactData = () => {
         return (
            <ContactData 
                ingredients={props.ingredients} 
                price={props.price}
            />
        )
    }

    return (
        <div>
            <CheckoutSummary 
                ingredients={props.ingredients}
            />
            <Route path={"/checkout-order"} render={contactData} />
        </div>
    );
};

const mapStateToProps = (state:any) => ({
    ingredients : state.ingredients,
    price : state.totalPrice
});

export default connect(mapStateToProps)(Checkout);