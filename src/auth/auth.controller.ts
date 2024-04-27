import {
    Controller,
    Get,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
import { AuthGuard as MyGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @UseGuards(AuthGuard('local'))
    @Post('login')
    signIn(@Request() req) {
      return this.authService.login(req.user);
    }
    
    @UseGuards(MyGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }
  