import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("videos")
export class Video {
  @PrimaryColumn()
  id!: string;

  @Column()
  name: string = "";

  @Column()
  description: string = "";

  @Column()
  duration: string = "";

  @Column()
  category_id: string = "";

  @CreateDateColumn()
  created_at!: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}