import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import {
  IsNotEmpty,
  Length,
  IsString,
  IsUrl,
  IsOptional,
  IsEmail,
} from 'class-validator';
import { Wish } from '../../wishes/entities/wish.entity';
import { Offers } from '../../offers/entities/offers.entity';
import { Wishlist } from '../../wishlists/entities/wishlists.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // на уровне базы данных тип строка , длина не более 30,
  // уникальное значение, не может быть пустым
  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })

  // Проверяет данные на уровне бизнес-логики до того,
  // как они будут сохранены в базе данных.
  @IsString()
  @Length(2, 30)
  @IsNotEmpty()
  username: string;

  @Column({
    type: 'varchar',
    length: 200,
    default: 'Пока ничего не рассказал о себе',
  })
  @IsString()
  @IsOptional()
  about: string;

  @Column({ type: 'varchar', default: 'https://i.pravatar.cc/300' })
  @IsString()
  @IsUrl()
  @IsOptional()
  avatar: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  @IsNotEmpty()
  password: string;

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
