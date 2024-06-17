import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hashPassword } from '../utils/hash.util';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'chloe',
      email: 'che@che.fr',
      password: 'pass;1234',
      roles: ['admin'],
    },
    {
      id: 2,
      username: 'customer1',
      email: 'che@che.fr',
      password: 'pass;1234',
      roles: ['admin'],
    },
  ];
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username: username } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await hashPassword(createUserDto.password);

    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.usersRepository.save(newUser);
  }
}
