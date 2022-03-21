export interface Delivery {
  name: string;
  address: string;
  phone: string;
}

export type DeliveryResponse = Delivery & { id: number };
