import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { Bank } from '../bank/bank.entity';

export enum AccountType {
    Savings = 'Savings',
    Checking = 'Checking',
}

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  holdersName: string;

  @Column({ length: 255 })
  employeeName: string;

  @Column()
  bankId: number;

  @OneToOne(type => Bank)
  @JoinColumn({name: 'bankId'})
  bank: Bank;

  @Column()
  branchId: number;

  @OneToOne(type => Branch)
  @JoinColumn({name: 'branchId'})
  branch: Branch;

  @Column('enum', { enum: AccountType })
  type: AccountType;

  @Column('int')
  number: number;

  @Column('bigint')
  employeeNumber: bigint;

  @CreateDateColumn({readonly: true})
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
