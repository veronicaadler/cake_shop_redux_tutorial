import { BUY_CUPCAKE } from './cupcakeTypes'

const initialState = {
    numofCupcakes: 20
}

const cupcakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CUPCAKE: 
            return {
                ...state,
                numofCupcakes: state.numofCupcakes - 1
            }

        default: return state
    }
}

export default cupcakeReducer;