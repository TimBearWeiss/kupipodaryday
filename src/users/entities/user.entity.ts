import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Wish } from '../../wishes/entities/wish.entity';
import { Offers } from '../../offers/entities/offers.entity';
import { Wishlist } from '../../wishlists/entities/wishlists.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Offers, (offer) => offer.user)
  @JoinColumn()
  offers: Offers[]; // список подарков, на которые скидывается пользователь

  /// первый аргумент функции та сущность, с которой происходит связь. (Wishes).
  /// воторой аргумент с каким полем происходит связь.
  @OneToMany(() => Wish, (wish) => wish.owner)
  @JoinColumn()
  wishes: Wish[]; // список желаемых подарков

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  @JoinColumn()
  wishlists: Wishlist[]; // список вишлистов, которые создал пользователь
}
