import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GreetingDTO } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async publishEvent(@Body() payload: GreetingDTO) {
    return this.appService.publishEvent(payload);
  }
}
