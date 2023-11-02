/*
  Warnings:

  - You are about to drop the column `descriotion` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "descriotion",
ADD COLUMN     "description" TEXT;
