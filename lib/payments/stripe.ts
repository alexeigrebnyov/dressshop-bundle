import { PaymentProvider, PaymentIntent, PaymentResult, PaymentStatus } from './types';

export class StripeProvider implements PaymentProvider {
  id = 'stripe';
  name = 'Stripe';

  async createPaymentIntent(amount: number, currency: string): Promise<PaymentIntent> {
    const response = await fetch('/api/payments/stripe/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
    });
    return response.json();
  }

  async confirmPayment(paymentIntentId: string): Promise<PaymentResult> {
    const response = await fetch('/api/payments/stripe/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentIntentId }),
    });
    return response.json();
  }

  async getPaymentStatus(paymentIntentId: string): Promise<PaymentStatus> {
    const response = await fetch(`/api/payments/stripe/status/${paymentIntentId}`);
    return response.json();
  }
}

export const stripeProvider = new StripeProvider();