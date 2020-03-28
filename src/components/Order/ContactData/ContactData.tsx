import React, { useState } from 'react';
import Button from '../../UI/Button';
import {withRouter} from 'react-router-dom';
import classes from './ContactData.module.css';
import axios from '../../../utils/axios-orders';
import Spinner from '../../UI/Spinner';
import Input from '../../UI/Input';
import {orderForm as formData, validateInput} from './orderForm';


const ContactData = (props:any) => {
    const [state,setState] = useState({
        loading: false,
        ingredients: props.ingredients,
        price: props.price,
        orderForm: formData,
        submitable: false
    }); 

    const inputChangeHandler = (event:any,inputIdentifier:any) => {
        const oldState = state;
        const orderFormNew:any=oldState.orderForm;
        const formEntry=orderFormNew[inputIdentifier];
        formEntry.value=event.target.value;
        formEntry.valid=validateInput(event.target.value,formEntry.validation);
        let submitable=true;
        Object.keys(orderFormNew).forEach((key:any)=>submitable=submitable && orderFormNew[key].valid);
        setState({...oldState,orderForm:orderFormNew,submitable:submitable})

    }

    const orderBurger = (event:any) => {
        event.preventDefault();
        setState({...state,loading:true})
        const formData:any={};

        Object.keys(state.orderForm).forEach((key:any)=>{
            formData[key]=state.orderForm[key];
        });

        const postData = {
             ingredients : state.ingredients,
             totalPrice: state.price,
             formData: formData
         }

         axios.post("/orders.json",postData)
             .then(response =>{
                 setState({...state,loading:false})
             });
    }

    console.log(state);

    let form = null;

    if(state.loading){
        form = <Spinner />
    }else {
        const frm:any=state.orderForm;
        const inputs = Object.keys(frm)
            .map((key:string)=>(
                <Input
                    key={key}
                    changed={(event:any)=>inputChangeHandler(event,key)}
                    elementtype={frm[key]["inputType"]}
                    elementconfig={{...(frm[key]["elementConfig"])}}
                    valid={frm[key]["valid"]}
                    value={frm[key].value}
                />
            ));
        form =(
            <form onSubmit={orderBurger}>
                    {inputs}
                    <Button disabled={!state.submitable} btnType="Success">ORDER</Button>
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