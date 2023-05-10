import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../services/prisma.service';
import { Logger, UseGuards } from '@nestjs/common';
import { CartService } from '../services/cart.service';
import { CartItemDto } from '../dtos/cartItem.dto';
import { RemoveItemFromCartDto } from '../dtos/removeItemFromCart.dto';
import { UpdateCartItemQuantityDto } from '../dtos/updateCartItemQuantity.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@WebSocketGateway()
export class CartGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cartService: CartService,
  ) {}

  private logger: Logger = new Logger('MessageGateway');
  @WebSocketServer() wss: Server;
  server: Server;

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('addToCart')
  async handleAddToCart(
    @MessageBody() data: CartItemDto,
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      let auth_token = socket.handshake.headers.authorization;
      auth_token = auth_token.split(' ')[1];
      const cart = await this.cartService.addProductToCart(data, auth_token);
      socket.emit('getCart', cart);
    } catch (error) {
      socket.emit('getCart', { error: error.message });
    }
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('addToCart')
  async handleRemoveCartItem(
    @MessageBody() data: RemoveItemFromCartDto,
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      const cart = await this.cartService.removeCartItemFromCart(data);
      socket.emit('getUpdatedCart', cart);
    } catch (error) {
      socket.emit('getUpdatedCart', { error: error.message });
    }
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('addToCart')
  async handleChangeItemQuantity(
    @MessageBody() data: UpdateCartItemQuantityDto,
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      const cart = await this.cartService.updateCartItemQuantity(data);
      socket.emit('getCartAfterUpdatingCartItem', cart);
    } catch (error) {
      socket.emit('getCartAfterUpdatingCartItem', { error: error.message });
    }
  }
}
