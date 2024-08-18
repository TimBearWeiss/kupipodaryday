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
import { IsString, Length, IsUrl, IsNumber, Min, Max } from 'class-validator';

// Схема для подарков

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ type: 'varchar', length: 250 })
  @IsString()
  @Length(1, 250)
  name: string;

  @Column({ type: 'varchar' })
  @IsUrl()
  link: string;

  @Column({ type: 'varchar' })
  @IsString()
  @IsUrl()
  image: string;

  @Column('decimal', { precision: 16, scale: 2 })
  @IsNumber()
  @Min(0)
  price: number;

  @Column('decimal', { precision: 16, scale: 2 })
  @IsNumber()
  @Min(0)
  raised: number;

  @Column({ type: 'varchar', length: 1024 })
  @IsString()
  @Length(1, 1024)
  description: string;

  @Column({ type: 'integer', default: 0 })
  copied: number;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @OneToMany(() => Offers, (offers) => offers.item)
  @JoinColumn()
  offers: Offers[];

  @ManyToMany(() => Wishlist, (wishlists) => wishlists.items)
  @JoinColumn()
  wishlists: Wishlist[];
}
