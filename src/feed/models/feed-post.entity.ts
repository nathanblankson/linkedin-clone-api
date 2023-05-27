import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '@users/models/user.entity';

@Entity('feed_post')
export class FeedPostEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({
		default: '',
	})
	public body: string;

	@CreateDateColumn()
	public createdAt: Date;

	@ManyToOne(() => UserEntity, (userEntity) => userEntity.feedPosts)
	public author: UserEntity;
}
