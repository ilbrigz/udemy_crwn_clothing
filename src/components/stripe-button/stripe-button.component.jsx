import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_OXI3tnjHYj54vagc3R1vDvQv00dIwztHBf';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLothing Ltd."
      billingAddress
      shippingAddress
      image="https:///svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
