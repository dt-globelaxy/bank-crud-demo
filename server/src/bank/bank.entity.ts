import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Branch } from '../branch/branch.entity';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true})
  name: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @OneToMany(type => Branch, branch => branch.bank)
  branches: Branch[];

  @CreateDateColumn({readonly: true})
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
