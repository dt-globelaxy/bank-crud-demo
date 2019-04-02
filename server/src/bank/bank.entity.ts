import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { Account } from 'src/account/account.entity';

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

  @OneToMany(type => Account, account => account.bank)
  accounts: Account[];

  @CreateDateColumn({readonly: true})
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
