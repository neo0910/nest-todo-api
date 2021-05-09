import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from './todo/todo.model';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 54322,
      username: 'dbuser',
      password: 'dbpass',
      database: 'nest-todo-api',
      models: [Todo],
      autoLoadModels: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
