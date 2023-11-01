// 入力値のバリデーションをするためのクラスファイル
// mutationの引数に対してバリデーションをかける　→ ライブラリ:フィールドにデコレーターをつけるだけでバリデーションをできるようになる

import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

// @InputType: クラスをmutationの引数として扱う場合
@InputType()
export class CreateTaskInput {
  //@Field: tsをGraphQLスキーマに変換する
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsDateString()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;
}
