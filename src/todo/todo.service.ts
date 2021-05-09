import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}

  async createTodo(dto: CreateTodoDto): Promise<Todo> {
    const todo = await this.todoModel.create(dto);
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.findAll();
    return todos;
  }

  async updateTodo(id: number, dto: CreateTodoDto): Promise<Todo> {
    const todo = await this.todoModel.findByPk(id);
    return todo.update(dto);
  }

  async deleteTodo(id: number): Promise<void> {
    const todo = await this.todoModel.findByPk(id);
    await todo.destroy();
  }
}
