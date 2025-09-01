import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  // Note: class name is `School` (singular)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  contact: string;

  @Column()
  email_id: string;

  @Column()
  image_url: string;
}
