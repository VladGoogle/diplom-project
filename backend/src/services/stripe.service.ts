import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { ChargeDto } from '../dtos/charge.dto';
import { AddressDto } from '../dtos/address.dto';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';

@Injectable()
export default class StripeService {
  private stripe: Stripe;
  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2022-11-15',
    });
  }

  public async createCustomerToken(
    first_name: string,
    last_name: string,
    email: string,
  ) {
    return this.stripe.customers.create({
      email,
      metadata: {
        first_name: first_name,
        last_name: last_name,
      },
    });
  }

  public async updateCustomerAddress(
    token: string,
    data: AddressDto | UpdateAddressDto,
  ) {
    return await this.stripe.customers.update(token, {
      address: {
        ...data,
      },
    });
  }

  public async createCardToken(userToken: string, cardToken: string) {
    return await this.stripe.customers.createSource(userToken, {
      source: cardToken,
    });
  }

  public async createCharge(data: ChargeDto) {
    return await this.stripe.charges.create({
      ...data,
    });
  }

  public async createRefund(charge: string) {
    return await this.stripe.refunds.create({
      charge: charge,
    });
  }
}
