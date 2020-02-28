import React, {useState} from 'react'
import { FunctionComponent as FC } from 'react'
import { Aux } from '../../hoc';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../utils/axios-orders';
import Spinner from '../../components/UI/Spinner';

type BurgerBuilderProps = {

};

export type Ingredient = {
    [ingredients:string] : number
};

export type Ingredients = {
    ingredients : Ingredient
    totalPrice : number,
    purchaseable: boolean,
    purchasing: boolean,
    loading: boolean
};

type IngredientPrices = {
    [ingredients:string] :number
};

const INGREDIENT_PRICES : IngredientPrices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6    
}


const BurgerBuilder : FC<BurgerBuilderProps> = (props : BurgerBuilderProps) => {

    const getInitialState = () => {
        return {
            ingredients : {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice : 4,
            purchaseable: false,
            purchasing: false,
            loading: false
        };
    }

    const initialIngredients : Ingredients = getInitialState();

    const [state,setState] = useState<Ingredients>(initialIngredients);

    //Generic adder high-order function to reduce redundant code
    const adder = (inc : number) => {
        return (type: string) => {
            const oldCount : number = state.ingredients[type];
            const oldPrice: number = state.totalPrice;
            
            let updatedCount = oldCount+inc;

            updatedCount = updatedCount>0 ? updatedCount : 0;
            
            const updatedIngredients : Ingredients = {...state};
            
            let newPrice = oldPrice;

            if(updatedCount!==oldCount){
                newPrice=Math.round((newPrice + INGREDIENT_PRICES[type]*inc)*10)/10;
            }


            updatedIngredients.ingredients[type]=updatedCount;
            updatedIngredients.totalPrice=newPrice;
            
            const sum = Object.keys(updatedIngredients.ingredients).map(
                ing => updatedIngredients.ingredients[ing]
            ).reduce((sum,el)=> sum+el,0);

            updatedIngredients.purchaseable=sum>0?true:false;

            setState(updatedIngredients);
        };
    }

    const addIngredient=adder(1);
    const remIngredient=adder(-1);

    const addIngredientHandler = (type : string) => {
        addIngredient(type);
    };

    const removeIngredientHandler = (type : string) => {
        remIngredient(type);
    };

    const purchasingUpdater = (flag:boolean) => {
        return () => {
            const updatedIngredients : Ingredients = {...state};
            updatedIngredients.purchasing = flag;
            setState(updatedIngredients);
        }
    }

    const proceedOrder = () => {

        const postingIngredients : Ingredients = {
            ...state
        };
        postingIngredients.loading=true;
        setState(postingIngredients);

        const postData = {
            ingredients : state.ingredients,
            totalPrice: state.totalPrice,
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
                const loadedIngredients : Ingredients = {
                    ...postingIngredients
                };
                loadedIngredients.loading=false;
                setState(loadedIngredients);
            });
    }

    const purchaseHandler = purchasingUpdater(true);
    const purchaseCancelHandler = purchasingUpdater(false);

    const orderSummary = state.loading 
        ? <Spinner/>
        : <OrderSummary
            price={state.totalPrice}
            cancelOrder={purchaseCancelHandler}
            proceedOrder={proceedOrder}
            ingredients={state.ingredients}
        />

    
    return(
        <Aux>
            <Modal
                modelClosed={purchaseCancelHandler} 
                show={state.purchasing}>
                    {orderSummary}
            </Modal>
            <Burger ingredients={state.ingredients}/>
            <BuildControls
                reset={()=>setState(getInitialState())}
                purchaseable={state.purchaseable}
                ordered={purchaseHandler}
                currentPrice={state.totalPrice}
                addIngredient={addIngredientHandler} 
                remIngredient={removeIngredientHandler}
            />
        </Aux>
    );
};

export default BurgerBuilder;