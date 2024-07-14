import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Offers } from 'src/offers/entities/offers.entity';
import { Wishlist } from '../../wishlists/entities/wishlists.entity';

// Схема для подарков

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @OneToMany(() => Offers, (offers) => offers.item)
  @JoinColumn()
  offers: Offers[];

  @ManyToMany(() => Wishlist, (wishlists) => wishlists.items)
  @JoinColumn()
  wishlists: Wishlist[];
}
