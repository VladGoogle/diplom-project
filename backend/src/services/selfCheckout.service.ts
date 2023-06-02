import { Injectable } from '@nestjs/common';
import { SelfCheckoutQueries } from '../queries/selfCheckout.queries';
import { CheckoutSectionDto } from '../dtos/checkoutSection.dto';
import { SelfCheckoutDto } from '../dtos/selfCheckout.dto';

@Injectable()
export class SelfCheckoutService {
  constructor(private selfCheckoutQueries: SelfCheckoutQueries) {}

  async addNewSelfCheckoutCity(data: SelfCheckoutDto) {
    return await this.selfCheckoutQueries.addNewSelfCheckoutCity(data);
  }

  async addNewSelfCheckoutSection(data: CheckoutSectionDto) {
    return await this.selfCheckoutQueries.addNewCheckoutSection(data);
  }

  async getAllCities() {
    return await this.selfCheckoutQueries.getAllCities();
  }

  async getAllSectionsById(id: number) {
    return await this.selfCheckoutQueries.getAllSectionsById(id);
  }
}
