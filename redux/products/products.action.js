import { ProductActionsTypes } from './products.types';

export const setProducts = products => ({
  type: ProductActionsTypes.SET_PRODUCTS,
  payload: products
});