export class Payments {
  orderKey: string;
}

export class ProcessPaymentResponse {
  orderKey: string;
  status: PaymentStatus;
}

export enum PaymentStatus {
  DECLINED = 'declined',
  CONFIRMED = 'confirmed',
}
