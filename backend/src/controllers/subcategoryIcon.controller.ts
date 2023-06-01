import {
  Controller,
  Param,
  Get,
  ParseIntPipe,
} from '@nestjs/common';

import { SubcategoryIconService } from '../services/subcategoryIcon.service';

@Controller()
export class SubcategoryIconController {
  constructor(private subcategoryIconService: SubcategoryIconService) {}

  @Get('subcategoryIcon/:id')
  async getCategoryIconById(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoryIconService.getSubcategoryIconById(id);
  }
}
