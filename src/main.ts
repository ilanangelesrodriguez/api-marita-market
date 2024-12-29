import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar el prefijo global de la API
  app.setGlobalPrefix('v1/api');

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Push Notifications API')
    .setDescription('API para el envío de notificaciones push')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/api', app, document);

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
