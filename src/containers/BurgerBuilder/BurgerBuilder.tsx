import React, { useState } from 'react'
import { FunctionComponent as FC } from 'react'
import { Aux } from '../../hoc';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../utils/axios-orders';
import Spinner from '../../components/UI/Spinner';
import { withErrorHandler } from '../../hoc';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';


export type Ingredients = {
    purchaseable: boolean,
    purchasing: boolean,
    loading: boolean,
    error: boolean,
};


const BurgerBuilder: FC<any> = (props: any) => {

    const getInitialState = () => {
        return {
            purchaseable: false,
            purchasing: false,
            loading: false,
            error: false
        };
    }

    /*
    useEffect(()=>{
        const oldState = state;
        axios.get("/ingredients.json")
        .then((response:any)=>{
            const ingredients = response.data ? response.data : {}; 
            const newPrice  = 4 + computePrice(ingredients);
            setState({...oldState,
                ingredients:response.data,
                totalPrice: newPrice
            });
        })
        .catch(err => setState({...state,error:true}));
    },[])*/

    const initialIngredients: Ingredients = getInitialState();

    const [state, setState] = useState<Ingredients>(initialIngredients);

    const purchasingUpdater = (flag: boolean) => {
        return () => {
            const updatedIngredients: Ingredients = { ...state };
            updatedIngredients.purchasing = flag;
            setState(updatedIngredients);
        }
    }

    const proceedOrder = () => {
        props.history.push("/checkout");
    }

    const purchaseHandler = purchasingUpdater(true);
    const purchaseCancelHandler = purchasingUpdater(false);

    const purchaseableHandler = (ings: any) => {
        const reduceNumbers = (acc: number, el: number) => acc += el;
        const initialValue = 0;

        const sumArray: any = Object.keys(ings)
            .map(key => ings[key]);

        return sumArray.reduce(reduceNumbers, initialValue) > 0;
    }

    const orderSummary = state.loading || !props.ings
        ? <Spinner />
        : <OrderSummary
            price={props.price}
            cancelOrder={purchaseCancelHandler}
            proceedOrder={proceedOrder}
            ingredients={props.ings}
        />

    let burger = state.error ? <p>Error loading ingredients</p> : <Spinner />;

    if (props.ings) {
        burger = (
            <Aux>
                <Burger ingredients={props.ings} />
                <BuildControls
                    reset={props.onResetIngredients}
                    purchaseable={() => purchaseableHandler(props.ings)}
                    ordered={purchaseHandler}
                    currentPrice={props.price}
                    addIngredient={props.onIngredientAdded}
                    remIngredient={props.onIngredientRemoved}
                />
            </Aux>
        );
    }

    return (
        <Aux>
            <Modal
                modelClosed={purchaseCancelHandler}
                show={state.purchasing}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
};

const mapStateToProps = (state: any) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIngredientAdded: (ingredientName: any) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName }),
        onIngredientRemoved: (ingredientName: any) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName }),
        onResetIngredients: () => dispatch({ type: actionTypes.RESET_INGREDIENTS })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));