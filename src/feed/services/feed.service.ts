import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { FeedPostEntity } from '../models/feed-post.entity';
import { FeedPost } from '../models/feed-post.interface';

@Injectable()
export class FeedService {
	constructor(
		@InjectRepository(FeedPostEntity)
		private readonly feedPostRepository: Repository<FeedPostEntity>,
	) {}

	public createPost(feedPost: FeedPost): Observable<FeedPost> {
		return from(this.feedPostRepository.save(feedPost));
	}

	public findAllPosts(): Observable<FeedPost[]> {
		return from(this.feedPostRepository.find());
	}

	public findPost(id: number): Observable<FeedPost> {
		return from(this.feedPostRepository.findOne({ where: { id } }));
	}

	public updatePost(
		id: number,
		feedPost: FeedPost,
	): Observable<UpdateResult> {
		return from(this.feedPostRepository.update(id, feedPost));
	}

	public deletePost(id: number): Observable<DeleteResult> {
		return from(this.feedPostRepository.delete(id));
	}
}
