import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  publishEvent() {
    console.log('evento a enviar desde principal');
    return this.appService.publishEvent();
  }
}
