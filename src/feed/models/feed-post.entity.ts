import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ default: '' })
	public body: string;

	@CreateDateColumn()
	public createdAt: Date;
}
