import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

import { Observable } from 'rxjs';

import { FeedPost } from '../models/feed-post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
	constructor(private feedService: FeedService) {}

	@Post()
	public create(@Body() feedPost: FeedPost): Observable<FeedPost> {
		return this.feedService.createPost(feedPost);
	}

	@Get()
	public findAll(): Observable<FeedPost[]> {
		return this.feedService.findAllPosts();
	}

	@Get(':id')
	public findOne(@Param('id') id: string): Observable<FeedPost> {
		return this.feedService.findPost(Number(id));
	}

	@Put(':id')
	public update(@Param('id') id: string, @Body() feedPost: FeedPost) {
		return this.feedService.updatePost(Number(id), feedPost);
	}

	@Delete(':id')
	public delete(@Param('id') id: string) {
		return this.feedService.deletePost(Number(id));
	}
}
