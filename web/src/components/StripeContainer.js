import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51JwmBsBLrnIKqodPXZljWhaHPOddszWrebmFkMAtTy6M3cnCH76LyqM5lOiiTN2cuEamA1QwpHZpc4dnxllZOhys00NaztrrZb';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  const { amount } = props;
  const amountInCents = amount * 100;
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amount={amountInCents} />
    </Elements>
  );
}
