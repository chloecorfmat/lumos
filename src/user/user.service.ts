import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hashPassword } from '../utils/hash.util';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await hashPassword(createUserDto.password);

    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.usersRepository.save(newUser);
  }

  async findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username: username } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // @Todo : disallow admin user to remove admin role.
    const user = await this.usersRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.password) {
      updateUserDto.password = await hashPassword(updateUserDto.password);
    }

    const updatedUser = Object.assign(user, updateUserDto);
    return this.usersRepository.save(updatedUser);
  }
}
