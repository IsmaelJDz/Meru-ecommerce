import React from 'react';
import { useRouter } from 'next/router'

import StripeCheckout from 'react-stripe-checkout';

import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const priceForStripe = price * 100;
  const publishedKey =
    'pk_test_51J0HxKJ9seavLxProPyzPkbBMkKoJfiXA1CCq48HMTP6uNUtcdZJTUSwt9FDRe3AqZDi7OqV2vyXMV6O8xcpUlha007pQWqcpP';
  const onToken = token => {
    alert('Payment Successful');

    if (token) {
      dispatch(clearCart());
      router.push('/');
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MERU SA. CV."
      billingAddress
      shippingAddress
      image="/img/logo.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeCheckoutButton;