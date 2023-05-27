import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/services/users.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: parseInt(process.env.POSTGRES_PORT),
			database: process.env.POSTGRES_DATABASE,
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			autoLoadEntities: true,
			synchronize: true,
		}),
		FeedModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService, UsersService],
})
export class AppModule {}
