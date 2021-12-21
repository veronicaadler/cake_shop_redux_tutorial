import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import cupcakeReducer from './cupcake/cupcakeReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cupcake: cupcakeReducer,
    user: userReducer
})

export default rootReducer;