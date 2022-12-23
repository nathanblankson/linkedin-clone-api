import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ default: '' })
	public body: string;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	public createdAt: Date;
}
