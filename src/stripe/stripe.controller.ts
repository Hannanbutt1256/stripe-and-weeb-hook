/* eslint-disable prettier/prettier */
// stripe.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreatePaymentDto } from './dto/createpayment.dto';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}
  @Post('create-payment-intent')
  async createPaymentIntent(@Body() createPaymentDto: CreatePaymentDto) {
    const paymentIntent = await this.stripeService.createPaymentIntent(
      createPaymentDto.amount,
      createPaymentDto.currency,
    );
    return { clientSecret: paymentIntent.client_secret };
  }
}
