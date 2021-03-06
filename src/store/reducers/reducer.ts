import * as actionTypes from '../actions';
import { Reducer } from 'react';
import { updateState as update } from '../../utils/utils';

const INGREDIENT_PRICES: IngredientPrices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
}

type IngredientPrices = {
    [ingredients: string]: number
};

const roundPrice = (price: number) => Math.round((price) * 10) / 10;

const REDUX_LOCAL_STORAGE = "burger-builder-storage";



export const persistLocalStoreMiddleware = (store: any) =>
    (next: any) => (action: any) => {
        const returnValue = next(action)
        localStorage.setItem(REDUX_LOCAL_STORAGE, JSON.stringify(store.getState()));
        return returnValue
    };


const EMPTY_STATE = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 4
};
const initialState = localStorage.getItem(REDUX_LOCAL_STORAGE) != null
    ? JSON.parse(localStorage.getItem(REDUX_LOCAL_STORAGE) || "{}")
    : EMPTY_STATE;


const addIngredient = (state: any, action: any) => {
    return update(state,
        {
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: roundPrice(state.totalPrice + INGREDIENT_PRICES[action.ingredientName])
        });
};


const removeIngredient = (state: any, action: any) => {
    return update(state, {
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: roundPrice(state.ingredients[action.ingredientName] === 0
                ? state.ingredients[action.ingredientName]
                : state.ingredients[action.ingredientName] - 1)
        },
        totalPrice: roundPrice(state.ingredients[action.ingredientName] === 0
            ? state.totalPrice
            : state.totalPrice - INGREDIENT_PRICES[action.ingredientName])
    });
};




export const reducer: Reducer<any, any> = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.RESET_INGREDIENTS:
            return EMPTY_STATE;
        default:
            return state;
    }
};
