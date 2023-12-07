import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";

import { Course } from "./Course";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @ManyToMany(() => Course, (course) => course.users)
  courses!: Course[];
}
