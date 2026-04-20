export type DeliveryProviderType = 'ruspost' | 'cdek' | 'boxberry' | 'dellin' | 'custom';

export interface DeliveryOption {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  price: number;
  estimatedDays: { min: number; max: number };
  isActive: boolean;
}

export interface DeliveryAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region?: string;
  postalCode: string;
  country: string;
}

export interface DeliveryProvider {
  id: string;
  name: string;
  calculateCost(address: DeliveryAddress, weight: number): Promise<DeliveryOption[]>;
  createShipment(orderId: string, address: DeliveryAddress): Promise<ShipmentResult>;
  trackShipment(trackingNumber: string): Promise<TrackingInfo>;
}

export interface ShipmentResult {
  success: boolean;
  trackingNumber?: string;
  labelUrl?: string;
  errorMessage?: string;
}

export interface TrackingInfo {
  status: 'pending' | 'in_transit' | 'delivered' | 'returned' | 'failed';
  history: TrackingEvent[];
  estimatedDelivery?: string;
}

export interface TrackingEvent {
  date: string;
  location: string;
  description: string;
  descriptionRu: string;
}