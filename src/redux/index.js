import { createStore } from 'redux'

const BUY_CAKE = 'BUY_CAKE'

const buyCake = () => {
    return {
        type: BUY_CAKE, 
        payload: 'First redux action'
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numofCakes: state.numofCakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer);
//getState is a method that allows us to access the state of the store
console.log('Initial state', store.getState())
store.subscribe(() => console.log('Updated state', store.getState))
store.dispatch(buyCake())

