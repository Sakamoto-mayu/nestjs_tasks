import { Task } from './models/task.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // ＠Query:getTasksメソッドがグラフQLデータを取得するためのメソッドであることを伝えるため
  // [Task]はTSではくグラフQLの型の書き方
  //  第２引数には設定をかける。戻り値をnullとする場合。taskが存在しない場合には空配列を返却するので’items’
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  // Mutationの引数はメソッドの戻り値を定義
  @Mutation(() => Task)
  // @Args: リクエストから情報を受け取り引数にセットする
  createTask(
    // @Args('name') name: string,
    // @Args('dueDate') dueDate: string,
    // @Args('description', { nullable: true }) description: string,

    // dtoによるバリデーション付き引数
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Task {
    // return this.taskService.createTask(name, dueDate, description);
    return this.taskService.createTask(createTaskInput);
  }
}
