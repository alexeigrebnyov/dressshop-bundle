import { PaymentProvider } from './types';

export type ProviderType = 'stripe' | 'yookassa' | 'robokassa' | 'custom';

interface ProviderConfig {
  provider: PaymentProvider;
  enabled: boolean;
}

class PaymentProviderRegistry {
  private providers: Map<ProviderType, ProviderConfig> = new Map();

  register(type: ProviderType, provider: PaymentProvider, enabled = false) {
    this.providers.set(type, { provider, enabled });
  }

  enable(type: ProviderType) {
    const config = this.providers.get(type);
    if (config) {
      config.enabled = true;
    }
  }

  disable(type: ProviderType) {
    const config = this.providers.get(type);
    if (config) {
      config.enabled = false;
    }
  }

  getActiveProvider(): PaymentProvider | null {
    for (const config of this.providers.values()) {
      if (config.enabled) {
        return config.provider;
      }
    }
    return null;
  }

  getAllProviders(): ProviderType[] {
    return Array.from(this.providers.keys());
  }
}

export const paymentRegistry = new PaymentProviderRegistry();