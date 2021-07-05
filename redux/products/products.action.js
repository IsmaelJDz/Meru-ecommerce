import { ProductActionsTypes } from "@/redux/products/products.types";

export const setProducts = products => ({
  type: ProductActionsTypes.SET_PRODUCTS,
  payload: products
});
