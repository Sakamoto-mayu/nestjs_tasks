import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    // GraphQLモジュールのインポート。forRootはApp全体に反映させるメソッド。
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // ドライバーはApolloドライバーを使用する
      driver: ApolloDriver,
      // playgroundはグラフQL APIをGUIで簡単に検証するためのツール
      playground: true,
      // コードファーストで自動生成されるスキーマファイルの指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
