import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

const db = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'artcrit',
  entities: [User],
  synchronize: true,
  dateStrings:true,
})

@Module({
  imports: [UserModule,db],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
