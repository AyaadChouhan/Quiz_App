import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User} from './user/user.entity';

const env = dotenv.config();

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type : 'postgres',
    host : process.env.DB_HOST,
    port : +process.env.DB_PORT,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    entities : [User],
    synchronize : true

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
