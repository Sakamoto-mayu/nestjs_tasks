import { Task as TaskModel } from './models/task.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // ＠Query:getTasksメソッドがグラフQLデータを取得するためのメソッドであることを伝えるため
  // [Task]はTSではくグラフQLの型の書き方
  //  第２引数には設定をかける。戻り値をnullとする場合。taskが存在しない場合には空配列を返却するので’items’
  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  // Mutationの引数はメソッドの戻り値を定義
  @Mutation(() => TaskModel)
  // @Args: リクエストから情報を受け取り引数にセットする
  async createTask(
    // @Args('name') name: string,
    // @Args('dueDate') dueDate: string,
    // @Args('description', { nullable: true }) description: string,

    // dtoによるバリデーション付き引数
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    // return this.taskService.createTask(name, dueDate, description);
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return await this.taskService.updateTask(updateTaskInput);
  }
}
