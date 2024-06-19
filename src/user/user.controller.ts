import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/role.enum';
import { User } from './entities/user.entity';
import { RolesAllowedGuard } from './guards/roles-allowed.guard';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Post()
  @ApiBearerAuth()
  @Roles(Role.Admin)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.Admin)
  @UseGuards(RolesAllowedGuard)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
