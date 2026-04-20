import { PaymentProvider } from './types';

export class YookassaProvider implements PaymentProvider {
  id = 'yookassa';
  name = 'ЮKassa';

  async createPaymentIntent(amount: number, currency: string): Promise<any> {
    const response = await fetch('/api/payments/yookassa/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
    });
    return response.json();
  }

  async confirmPayment(paymentIntentId: string): Promise<any> {
    const response = await fetch('/api/payments/yookassa/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentIntentId }),
    });
    return response.json();
  }

  async getPaymentStatus(paymentIntentId: string): Promise<any> {
    const response = await fetch(`/api/payments/yookassa/status/${paymentIntentId}`);
    return response.json();
  }
}

export const yookassaProvider = new YookassaProvider();