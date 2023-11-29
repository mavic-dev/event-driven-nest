import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  @EventPattern('greeting')
  handleGreetingEvent(data: any) {
    console.log('event received', data);
  }
}
