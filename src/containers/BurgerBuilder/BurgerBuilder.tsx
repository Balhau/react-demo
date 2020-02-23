import React, {useState} from 'react'
import { FunctionComponent as FC } from 'react'
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';

type BurgerBuilderProps = {

};


const BurgerBuilder : FC<BurgerBuilderProps> = (props : BurgerBuilderProps) => {

    const [state,setState] = useState({
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    });
    
    return(
        <Aux>
            <Burger ingredients={state.ingredients}/>
            <div>BuildControls</div>
        </Aux>
    );
};

export default BurgerBuilder;