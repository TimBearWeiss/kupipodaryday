import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';

// Схема желающих скинуться

@Entity()
export class Offers {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn()
  user: User; // содержит желающего скинуться

  @ManyToOne(() => Wish, (wishes) => wishes.offers)
  @JoinColumn()
  item: Wish;

  @Column('decimal', { precision: 16, scale: 2 })
  amount: number;

  @Column({ type: 'boolean', default: false })
  hidden: boolean;
}
