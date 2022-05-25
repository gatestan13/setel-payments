import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  Payments,
  PaymentStatus,
  ProcessPaymentResponse,
} from './dto/payments.dto';

@Injectable()
export class PaymentsService {
  constructor(private jwtService: JwtService) {}

  async processPayment(createPaymentDto: Payments, access_token: string) {
    console.log(access_token);
    try {
      this.jwtService.verify(access_token, {
        secret: 'secret-token',
      });
    } catch (err) {
      throw new UnauthorizedException();
    }

    const randomNumber = Math.round(Math.random());
    const res: ProcessPaymentResponse = {
      orderKey: createPaymentDto.orderKey,
      status: Object.values(PaymentStatus)[randomNumber],
    };

    await sleep(3000);
    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    return res;
  }
}
