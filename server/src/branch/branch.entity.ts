import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, Index, OneToMany } from 'typeorm';
import { Bank } from '../bank/bank.entity';
import { Account } from 'src/account/account.entity';

@Entity()
@Index('unique_index_with_bankId_and_name', (branch: Branch) => [branch.bankId, branch.name], { unique: true })
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 , nullable: true })
  address: string;

  @Column()
  bankId: number;

  @ManyToOne(type => Bank, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'bankId'})
  bank: Bank;

  @OneToMany(type => Account, account => account.bank)
  accounts: Account[];

  @CreateDateColumn({readonly: true})
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
