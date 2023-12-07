import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Course } from "./Course";

@Entity({ name: "times" })
export class Time {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  available!: string;

  @Column()
  time_zone!: string;

  @ManyToOne(() => Course, (course) => course.available_time, {
    cascade: true,
  })
  @JoinColumn({ name: "course_id" })
  course!: Course;
}
