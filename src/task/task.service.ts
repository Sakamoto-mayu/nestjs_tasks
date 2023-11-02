import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskInput } from './dto/createTask.input';
import { UpdateTaskInput } from './dto/updateTask.input';
// import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  // ↓DB作成前
  // プロパティの定義
  // tasks: Task[] = [];

  // タスクを取得するメソッド
  // getTasks()はメソッド
  // Task[]は戻り値の型
  // ↓DB作成前
  // getTasks(): Task[] {
  //   return this.prismaService.task.findMany();
  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();

    // ↓createTask作成前
    // const task1 = new Task();
    // task1.id = 1;
    // task1.name = 'task1';
    // task1.dueDate = '2023-01-01';
    // task1.status = 'NOT_STARTED';
    // this.tasks.push(task1);

    // ↓DB作成前
    // 呼び出し元(外部ファイル)にtasksの値を返すため
    // return this.tasks;
  }

  // タスクを作成するメソッド
  // createTask(name: string, dueDate: string, description?: string): Task {
  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    // dtoで定義したバリデーション付き引数を分割代入
    const { name, dueDate, description } = createTaskInput;
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
      },
    });

    // ↓DB作成前
    // const newTask = new Task();
    // newTask.id = this.tasks.length + 1;
    // newTask.name = name;
    // newTask.dueDate = dueDate;
    // newTask.status = 'NOT_STARTED';
    // newTask.description = description;
    // this.tasks.push(newTask);
    // return newTask;
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTaskInput;
    return await this.prismaService.task.update({
      // 更新したい値のフィールドを渡す
      data: { name, dueDate, status, description },
      // update:更新の場合どのタスクを更新するかの指定が必要になる
      where: { id },
    });
  }
}
