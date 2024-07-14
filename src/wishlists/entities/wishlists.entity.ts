import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Offers } from '../../offers/entities/offers.entity';
import { User } from '../../users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToMany(() => Wish, (wish) => wish.offers)
  @JoinColumn()
  items: Wish[];

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;
}
