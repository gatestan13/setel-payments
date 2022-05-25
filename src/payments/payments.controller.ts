import { Controller, Post, Body, Headers } from '@nestjs/common';
import { Payments } from './dto/payments.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('process')
  processPayment(
    @Body() createPaymentDto: Payments,
    @Headers('access_token') access_token: string,
  ) {
    return this.paymentsService.processPayment(createPaymentDto, access_token);
  }
}
