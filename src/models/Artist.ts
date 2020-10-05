import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Job from "./Job";

@Entity({ name: "artists" })
class Artist extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ type: "enum", enum: ["tattoo", "piercer"], default: "tattoo" })
  type: ArtistType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @OneToMany(() => Job, (job) => job.artist)
  jobs: Job[];
}

export default Artist;
