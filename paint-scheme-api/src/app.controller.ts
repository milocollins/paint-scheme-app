import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './shared/guards/auth/auth.guard';

@Controller()
export class AppController {
  @UseGuards(AuthGuard)
  @Get('hc')
  healthCheck(): Promise<string> {
    return new Promise<string>(() => 'Hello World');
  }
}
