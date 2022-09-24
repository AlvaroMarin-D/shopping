import { loadStripe } from '@stripe/stripe-js';
let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    //stripePromise = loadStripe('pk_test_51LlYv1EyrtHt2WH2Kuo6DffonpYvt1YguXqFwQ9EeN5OylK13UluZYvALV0px94nieqWS9bAAfCQdAZI1bsFQZps00vdu03rZF');
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
}

export default getStripe;