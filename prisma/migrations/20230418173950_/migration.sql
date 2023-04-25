/*
  Warnings:

  - You are about to drop the `Exam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Signs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `possibility1` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `possibility2` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `possibility3` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `possibility4` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `isCorrect` on the `Answer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_caseId_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_caseId_fkey";

-- DropForeignKey
ALTER TABLE "Signs" DROP CONSTRAINT "Signs_caseId_fkey";

-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "possibility1" TEXT NOT NULL,
ADD COLUMN     "possibility2" TEXT NOT NULL,
ADD COLUMN     "possibility3" TEXT NOT NULL,
ADD COLUMN     "possibility4" TEXT NOT NULL,
DROP COLUMN "isCorrect",
ADD COLUMN     "isCorrect" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Exam";

-- DropTable
DROP TABLE "History";

-- DropTable
DROP TABLE "Signs";
