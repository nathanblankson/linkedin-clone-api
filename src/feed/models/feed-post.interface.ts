import { User } from '../../users/models/user.interface';

export interface FeedPost {
	id?: number;
	body?: string;
	createdAt?: Date;
	author?: User;
}
