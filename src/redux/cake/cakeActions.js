import { BUY_CAKE } from './cakeTypes'

//it is a convention to create constants for action types, which we have
//imported above.

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export default buyCake;