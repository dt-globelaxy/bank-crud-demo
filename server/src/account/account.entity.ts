import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
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

  @Column({unique: false})
  bankId: number;

  @ManyToOne(type => Bank, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'bankId'})
  bank: Bank;

  @Column({unique: false})
  branchId: number;

  @ManyToOne(type => Branch, {onDelete: 'CASCADE'})
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
