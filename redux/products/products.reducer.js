import { ProductActionsTypes } from './products.types'

const INITIAL_STATE = {
  products: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ProductActionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }

    default:
      return state;
  }
};

export default shopReducer;