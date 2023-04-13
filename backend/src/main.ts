import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma.service';
import { config } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const configService = app.get(ConfigService);
  config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: configService.get('AWS_REGION'),
  });
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));
  await app.listen(process.env.SERVER_PORT);
  console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
}
bootstrap();
