import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  @EventPattern('book_created')
  handleGreetingEvent(data: any) {
    console.log('evento entrante', data);
  }
}
