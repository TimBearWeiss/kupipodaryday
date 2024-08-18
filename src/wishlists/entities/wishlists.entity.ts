import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  Column,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { IsString, IsUrl, Length, MaxLength } from 'class-validator';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @Column({ type: 'varchar', length: 250 })
  @IsString()
  @Length(1, 250)
  name: string;

  @Column({ type: 'varchar', length: 1500 })
  @IsString()
  @MaxLength(1500)
  description: string;

  @Column({ type: 'varchar' })
  @IsUrl()
  image: string;

  @ManyToMany(() => Wish, (wish) => wish.offers)
  @JoinColumn()
  items: Wish[];
}

// name — название списка. Не может быть длиннее 250 символов и короче одного;
// description — описание подборки, строка до 1500 символов;
// image — обложка для подборки;
// items содержит набор ссылок на подарки
