import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

import { Course } from "./Course";

@Entity({ name: "catagories" })
export class Catagory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @OneToMany(() => Course, (course) => course.catagory)
  courses!: Course[];
}
