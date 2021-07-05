import { useSelector } from 'react-redux'

import Layout from '../Layout'
import CheckoutItem from '@/components/checkout-item';

import StripeCheckoutButton from '../components/stripe-button';

import {
  selectCartTotal
} from '../redux/cart/cart.utils';

const CheckoutPage = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <Layout>
      <main className="
        w-4/4
        md:w-8/12
        min-h-3/4
        flex
        mx-8
        flex-col
        items-center
        max-w-screen-xl
        md:mx-auto"
      >
        <div className="
          w-full
          padding-custom
          flex
          justify-between
          border-custom"
        >
          <div className="w-1/6 capitalize">
            <span>Product</span>
          </div>
          <div className="w-1/6 capitalize">
            <span>Description</span>
          </div>
          <div className="w-1/6 px-2 capitalize">
            <span>Quantity</span>
          </div>
          <div className="w-1/6 px-3 capitalize">
            <span>Price</span>
          </div>
          <div className="capitalize">
            <span>Remove</span>
          </div>
        </div>
        {
          cartItems.length !== 0 ? (
            cartItems.map(cartItem => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : <p className="text-2xl py-8">there's no items on your cart</p>
        }
        <div className="total">
          <span className="block">TOTAL: ${selectCartTotal(cartItems)} </span>
          {
            cartItems.length !== 0 ? (
              <StripeCheckoutButton price={selectCartTotal(cartItems)} />
            ) : <button className="bg-blue-500 text-base text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                  Pay Now
                </button>
          }
        </div>
        <div className="text-center mt-6 mb-6 text-2xl text-red-700">
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 10/23 - CVV: 123
        </div>
      </main>
    </Layout>
  )
}

export default CheckoutPage;