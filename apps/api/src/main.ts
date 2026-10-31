import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);

  console.log('NIVO API is running on http://localhost:3000');
  console.log('Health check: http://localhost:3000/api/v1/health');
}

await bootstrap();