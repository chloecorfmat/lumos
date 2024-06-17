import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { SignInDto } from './dto/signin.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../users/decorators/roles.decorator';
import { Role } from '../users/enums/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    console.log(signInDto);
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  @ApiBearerAuth()
  @Roles(Role.User)
  getProfile(@Request() req) {
    return req.user;
  }
}
