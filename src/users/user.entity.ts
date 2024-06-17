import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'text',
    array: true,
  })
  roles: Role[];
}
