import { Field, InputType, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

// @InputType: クラスをmutationの引数として使うよ宣言
@InputType()
export class UpdateTaskInput {
  // @Field: 以下プロパティをGraphQLスキーマにフィールドとして登録させるために必須！スキーマは自動生成される設定のためFieldは重要。
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  // @IsNotEmptyは値が含まれていないことを否定する
  @IsNotEmpty()
  // IsNotEmptyだけだとname?がないことが許容されなくなってしまうため、Optionalをつける
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @Field({ nullable: true })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Field({ nullable: true })
  description?: string;
}
