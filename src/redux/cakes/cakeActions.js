import { BUY_CAKE} from './cakeTypes';

//it is a convention to create constants for action types, which we have
//imported above.

const buyCake = () => {
    return {
        action: 'BUY_CAKE',
    }
}

export default buyCake;