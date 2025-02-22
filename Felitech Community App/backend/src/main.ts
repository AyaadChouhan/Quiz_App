import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: [ "*"],
  });
  console.log('in');
  app.use(json({ limit: '10mb' }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
