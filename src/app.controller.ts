import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('message/:username')
  getMessage(@Param('username') username: string): string {
    return `This is my message for ${username}`;
  }

  @Get('user/:username')
  userExists(@Param('username') username: string): boolean {
    return this.userService.userExists(username);
  }
}
