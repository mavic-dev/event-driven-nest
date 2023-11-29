import { NestFactory } from '@nestjs/core';
import { KafkaModule } from './kafka.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { KAFKA_OPTIONS } from './kafka.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    KafkaModule,
    KAFKA_OPTIONS,
  );
  await app.listen();
}
bootstrap();
