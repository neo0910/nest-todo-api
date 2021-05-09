import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAllTodos();
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createTodoDto: CreateTodoDto) {
    return this.todoService.updateTodo(+id, createTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.deleteTodo(+id);
  }
}
