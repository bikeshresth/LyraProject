import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app/app.module';
// import * as csurf from 'csurf';
// import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  // CORS
  app.enableCors();
  // MIDDLEWARES
  app.use(cookieParser());
  app.use(helmet());
  app.use(compression());
  // PIPES
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  app.setGlobalPrefix(globalPrefix);
  // LISTEN
  const port = process.env.PORT || 5000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
