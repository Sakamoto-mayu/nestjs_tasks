import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  //  DBとのコネクションを張るための処理
  async onModuleInit() {
    await this.$connect();
  }

  //   DBとの接続を切るタイミングでNestJSnoアプリケーションも切る処理
  //   async enableShutdownHooks(app: INestApplication) {
  //     this.$on('beforeExit', async () => {
  //       await app.close();
  //     });
  //   }
}
