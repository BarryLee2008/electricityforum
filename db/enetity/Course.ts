import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Time } from "./Time";
import { User } from "./User";
import { Catagory } from "./Catagory";

@Entity({ name: "courses" })
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column("text")
  description!: string;

  @Column()
  type!: string;

  @OneToMany(() => Time, (time) => time.course)
  available_time!: Time[];

  @ManyToMany(() => User, (user) => user.courses, { cascade: true })
  @JoinTable({
    name: "user_course_rel",
    joinColumn: {
      name: "course_id",
    },
    inverseJoinColumn: {
      name: "user_id",
    },
  })
  users!: User[];

  @ManyToOne(() => Catagory, (catagory) => catagory.courses, {
    cascade: true,
  })
  @JoinColumn({
    name: "catagory_id",
  })
  catagory!: Catagory;
}
