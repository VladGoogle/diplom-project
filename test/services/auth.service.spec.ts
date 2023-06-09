import { Test } from '@nestjs/testing';
import { AuthService } from '../../backend/src/services/auth.service';
import { PrismaService } from '../../backend/src/services/prisma.service';
import { AppModule } from '../../backend/src/app.module';
import { UserDto } from '../../backend/src/dtos/user.dto';
import { Role } from '../../backend/src/enums/role.enum';

describe('The AuthenticationService', () => {
  let prisma: PrismaService;
  let authService: AuthService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    prisma = moduleRef.get(PrismaService);
    authService = moduleRef.get(AuthService);
    // await prisma
    //   .cleanDatabase()
    //   .then(() => {
    //     console.log('Database cleaned successfully');
    //   })
    //   .catch((error) => {
    //     console.error('Error cleaning database:', error);
    //   });
  });
  describe('Registration', () => {
    const user: UserDto = {
      firstName: 'Vlad',
      lastName: 'Google',
      email: 'test@gmail.com',
      password: 'Asdrtyjklmnb1@',
      phone: '+380990109570',
      roles: Role.ADMIN,
    };
    it('should register new user', async () => {
      const registeredUser = await authService.signUp(user);
      await expect(registeredUser).not.toHaveProperty('password');
    });
  });
});
