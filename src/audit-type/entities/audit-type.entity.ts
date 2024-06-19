import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuditType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column({
    type: 'float',
  })
  version: number;
}
