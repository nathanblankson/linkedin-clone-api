import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { FeedPostEntity } from '@feed/models/feed-post.entity';
import { Role } from './role.enum';

@Entity('user')
export class UserEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public firstName: string;

	@Column()
	public lastName: string;

	@Column({
		unique: true,
	})
	public email: string;

	@Column({
		type: 'enum',
		enum: Role,
		default: Role.User,
	})
	public role: Role;

	@OneToMany(() => FeedPostEntity, (feedPostEntity) => feedPostEntity.author)
	public feedPosts: FeedPostEntity[];

	@BeforeInsert()
	public emailToLowerCase() {
		this.email = this.email.toLowerCase();
	}

	public fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
