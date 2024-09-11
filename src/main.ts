import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove unknown properties from the DTO
      forbidNonWhitelisted: true, // Throw an error if unknown properties are found
      transform: false, // Automatically transform payloads to DTO instances
    }),
  );
  await app.listen(3000);
}
bootstrap();
