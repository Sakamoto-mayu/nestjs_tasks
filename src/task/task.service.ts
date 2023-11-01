import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  // プロパティの定義
  tasks: Task[] = [];

  // タスクを取得するメソッド
  // getTasks()はメソッド
  // Task[]は戻り値の型
  getTasks(): Task[] {
    // const task1 = new Task();
    // task1.id = 1;
    // task1.name = 'task1';
    // task1.dueDate = '2023-01-01';
    // task1.status = 'NOT_STARTED';
    // this.tasks.push(task1);

    // 呼び出し元(外部ファイル)にtasksの値を返すため
    return this.tasks;
  }

  // タスクを作成するメソッド
  // createTask(name: string, dueDate: string, description?: string): Task {
  createTask(createTaskInput: CreateTaskInput): Task {
    // dtoで定義したバリデーション付き引数を分割代入
    const { name, dueDate, description } = createTaskInput;

    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);

    return newTask;
  }
}
