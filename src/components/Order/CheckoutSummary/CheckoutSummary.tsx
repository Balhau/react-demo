import React from 'react';
import Burger from '../../Burger';
import Button from '../../UI/Button';
import classes from './CheckoutSummary.module.css';
import { withRouter } from 'react-router-dom';

const CheckoutSummary = (props: any) => {
    const handleContinue = () => {
        props.history.push("/checkout-order");
    };
    const handleCancel = ()=>{
        props.history.push("/");
    };
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tasts well</h1> 
            <div style={{width:"100%", margin: "auto"}}>
                 <Burger ingredients={props.ingredients} />
                 <Button clicked={handleCancel} btnType="Danger">CANCEL</Button>
                 <Button clicked={handleContinue} btnType="Success">CONTINUE</Button>
            </div> 
        </div>
    );
};

export default withRouter(CheckoutSummary);