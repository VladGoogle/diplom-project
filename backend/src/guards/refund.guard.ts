// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { RefundDto } from '../dtos/refund.dto';
// import { Role } from '../enums/role.enum';
// import { UserService } from '../services/users.service';
//
// @Injectable()
// export class RefundGuard implements CanActivate {
//   constructor(private userService: UserService) {}
//   async canActivate(context: ExecutionContext): boolean {
//     const request = context.switchToHttp().getRequest();
//     const user = request.user;
//     const refund: RefundDto = request.body;
//     const customer = await this.userService.findUserByEmail(user.email);
//
//     // Check if the user is an admin
//     if (user.role === Role.ADMIN || user.role === Role.NETWORK_ADMIN) {
//       return true;
//     }
//
//     // Check if the user is a customer making a full refund
//     if (
//       user.role === Role.CUSTOMER &&
//       refund.amount === refund.total &&
//       refund.amount > 0
//     ) {
//       return true;
//     }
//
//     return false;
//   }
// }
