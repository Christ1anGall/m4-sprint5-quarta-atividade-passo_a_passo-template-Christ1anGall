import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  age: number;
}
