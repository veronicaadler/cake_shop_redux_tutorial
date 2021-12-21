import { useSelector, useDispatch } from 'react-redux'
import { buyCupcake } from '../redux/index';

const CupcakeContainer = () => {

    const numOfCupcakes = useSelector(state => state.cupcake.numofCupcakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Cupcakes - { numOfCupcakes } </h2>
            <button onClick={() => dispatch(buyCupcake())}>Buy Cupcake</button>
        </div>
    )
}

export default CupcakeContainer;