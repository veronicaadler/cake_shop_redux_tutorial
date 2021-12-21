import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

const HooksCakeContainer = () => {

    //useSelector acts as an close equivalent to mapStateToProps,
    //allowing us to access the status of state.

    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    //useDispatch hook returns a reference to the dispatch function
    //from redux store

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
      );
}

export default HooksCakeContainer;