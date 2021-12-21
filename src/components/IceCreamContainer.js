import { buyIceCream } from '../redux/index';
import { connect } from 'react-redux'

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCreams}</h2>
            <button onClick={buyIceCream}>Buy Ice Cream</button>
        </div>
      );
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);