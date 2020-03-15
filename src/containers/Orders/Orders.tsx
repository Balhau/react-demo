import React, { useState, useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../utils/axios-orders';
import Spinner from '../../components/UI/Spinner';

const Orders = (props:any) => {

    const [state, setState] = useState<any>({
        loading: true,
        orders: null, 
    });

    useEffect(
        () => {
            axios.get("/orders.json")
            .then(response => {
                if(response.data){
                    const keys = Object.keys(response.data);
                    const orderList = keys.map((key)=> response.data[key]);

                    setState({
                        loading: false,
                        orders: orderList
                    });
                }else{
                    setState({
                        loading: false,
                        orders: null
                    });
                }
            });
        },[])

    let order_list = (<Spinner />);

    if(!state.loading){
        order_list=state.orders != null
            ? state.orders.map((order:any) => <Order order={order}/>)
            : null;
    }

    return (
        <div>
            { order_list }
        </div>
    );
};

export default Orders;