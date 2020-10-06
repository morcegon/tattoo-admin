import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Artist from "@models/Artist";

@Entity({ name: "jobs" })
class Job extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Artist, (artist) => artist.jobs)
  artist: Artist;

  @Column({ type: "enum", enum: ["tattoo", "piercing"] })
  type: "tattoo" | "piercing";

  @Column({ type: "date" })
  date: Date;

  @Column({ length: 150 })
  customer: string;

  @Column({ type: "float", precision: 6, scale: 2 })
  value: number;

  @Column({
    type: "enum",
    enum: [
      "money",
      "debit - visa",
      "debit - master",
      "debit - elo",
      "credit",
      "credit installment",
    ],
  })
  payment: PaymentType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

export default Job;
