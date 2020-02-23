import React from 'react';
import {FunctionComponent as FC} from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css';
import Utils from '../../utils/utils';

type BurgerProps={
    ingredients: any;
};

const burger : FC<BurgerProps> = (props:BurgerProps) => {

    let newIngredients : any =Utils.shuffle(
        Object.keys(props.ingredients)
            .flatMap((ingKey : any) => {
                return [...Array(props.ingredients[ingKey])].map((_,i) => <BurgerIngredient key={ingKey+i} type={ingKey}/>)
            })
        );

    console.log(newIngredients);

    if(newIngredients.length===0){
        newIngredients=<p>Please start inserting ingredients</p>;
    }

    return (<div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        {newIngredients}
        <BurgerIngredient type='bread-bottom'/>
    </div>);
};


export default burger;