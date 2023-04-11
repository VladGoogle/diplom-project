import {
  Controller,
  Body,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
  Headers,
  Get,
  Delete,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CardService } from '../services/card.service';
import { CardDto } from '../dtos/card.dto';

@Controller()
export class CardController {
  constructor(private cardService: CardService) {}

  @UseGuards(JwtAuthGuard)
  @Post('account/card')
  async addCard(@Body() data: CardDto, @Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.cardService.addCard(
      {
        ...data,
      },
      token,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/card')
  async updateCardInfo(@Body() data: CardDto, @Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.cardService.updateCardInfo(
      {
        ...data,
      },
      token,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('account/card')
  async getCardByUserId(@Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.cardService.getCardByUserId(token);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('account/card/:id')
  async deleteCartById(@Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.cardService.deleteCardByUserId(token);
  }
}
