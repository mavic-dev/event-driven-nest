import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GreetingDTO } from './app.dto';
@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private clientKafka: ClientKafka) {}

  async publishEvent(payload: GreetingDTO) {
    try {
      await this.clientKafka.emit('greeting', payload);
      console.log(`send greeting:${JSON.stringify(payload)}`);
      return payload;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
