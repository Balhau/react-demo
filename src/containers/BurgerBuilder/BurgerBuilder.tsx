import React, {useState,useEffect} from 'react'
import { FunctionComponent as FC } from 'react'
import { Aux } from '../../hoc';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../utils/axios-orders';
import Spinner from '../../components/UI/Spinner';
import { withErrorHandler } from '../../hoc';

type BurgerBuilderProps = {

};

export type Ingredients = {
    ingredients: any,
    totalPrice : number,
    purchaseable: boolean,
    purchasing: boolean,
    loading: boolean,
    error: boolean,
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


const BurgerBuilder : FC<BurgerBuilderProps> = (props : BurgerBuilderProps | any) => {

    const getInitialState = () => {
        return {
            ingredients : null,
            totalPrice : 4,
            purchaseable: false,
            purchasing: false,
            loading: false,
            error:false
        };
    }

    const computePrice = (ingredients:any) => {
        return Object.keys(ingredients).map(
            ing => ingredients[ing]
        ).reduce((sum,el)=> sum+el,0);
    }

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
    },[])

    const initialIngredients : Ingredients = getInitialState();

    const [state,setState] = useState<Ingredients>(initialIngredients);

    //Generic adder high-order function to reduce redundant code
    const adder = (inc : number) => {
        return (type: string) => {
            const oldCount : number = state.ingredients[type];
            const oldPrice: number = state.totalPrice;
            
            let updatedCount = oldCount+inc;

            updatedCount = updatedCount>0 ? updatedCount : 0;
            
            const updatedIngredientsState : Ingredients = {...state};
            const updatedIngredients = updatedIngredientsState.ingredients;
            
            let newPrice = oldPrice;

            if(updatedCount!==oldCount){
                newPrice=Math.round((newPrice + INGREDIENT_PRICES[type]*inc)*10)/10;
            }

            updatedIngredients[type]=updatedCount;

            updatedIngredientsState.totalPrice=newPrice;
            
            const sum = computePrice(updatedIngredients);

            updatedIngredientsState.purchaseable=sum>0?true:false;

            setState(updatedIngredientsState);
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

        /*const postData = {
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
            */

           props.history.push("/checkout");
    }

    const purchaseHandler = purchasingUpdater(true);
    const purchaseCancelHandler = purchasingUpdater(false);

    const orderSummary = state.loading || !state.ingredients
        ? <Spinner/>
        : <OrderSummary
            price={state.totalPrice}
            cancelOrder={purchaseCancelHandler}
            proceedOrder={proceedOrder}
            ingredients={state.ingredients}
        />

        const resetBurger = ()=> {
            const newState = {...state,totalPrice: 4};
            Object.keys(newState.ingredients)
                .map(key => newState.ingredients[key]=0)
            setState(newState);
        };

        let burger = state.error ? <p>Error loading ingredients</p> : <Spinner />;

        if(state.ingredients){
         burger = (
            <Aux>
            <Burger ingredients={state.ingredients}/>
                <BuildControls
                    reset={resetBurger}
                    purchaseable={state.purchaseable}
                    ordered={purchaseHandler}
                    currentPrice={state.totalPrice}
                    addIngredient={addIngredientHandler} 
                    remIngredient={removeIngredientHandler}
                />
            </Aux>
            );
        }
        
    return(
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


export default withErrorHandler(BurgerBuilder,axios);