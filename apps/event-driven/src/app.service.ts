import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) {}
  async publishEvent() {
    try {
      await this.client.emit('book_created', {
        bookName: 'The Way Of Kings',
        author: 'Brandon Sanderson',
      });
      return 'send event';
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
