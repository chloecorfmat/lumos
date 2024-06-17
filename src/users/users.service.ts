import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'chloe',
      password: 'pass;1234',
      roles: ['user'],
    },
    {
      userId: 2,
      username: 'customer1',
      password: 'pass;1234',
      roles: ['admin'],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
