import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Bank } from '../bank/bank.entity';

@Entity()
@Index('unique_index_with_bankId_and_name', (branch: Branch) => [branch.id, branch.name], { unique: true })
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 , nullable: true })
  address: string;

  @Column()
  bankId: number;

  @ManyToOne(type => Bank)
  @JoinColumn({name: 'bankId'})
  bank: Bank;

  @CreateDateColumn({readonly: true})
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
