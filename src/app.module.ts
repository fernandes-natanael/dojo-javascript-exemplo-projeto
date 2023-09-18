import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [MongooseModule.forRoot('alterar-aqui'), UsersModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
