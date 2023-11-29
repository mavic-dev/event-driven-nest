import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { KAFKA_OPTIONS } from 'apps/kafka/src/kafka.options';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETING_SERVICE',
        ...KAFKA_OPTIONS,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
