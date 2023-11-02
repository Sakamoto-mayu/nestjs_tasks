import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

// ＠ObjectType：モデルからgraphQLのスキーマを生成するため
@ObjectType()
export class Task {
  // @Field:TSのフィールドをグラフQLスキーマのフィールドに変換するため
  // number型はデフォルトがフロート型になるため、アロー関数でInt型指定する。
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: Status;

  // nullを許容するため
  @Field({
    nullable: true,
  })
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
