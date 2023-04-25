/*
  Warnings:

  - You are about to drop the column `possibility4` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `reason` on the `Answer` table. All the data in the column will be lost.
  - Added the required column `reason1` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason2` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason3` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "possibility4",
DROP COLUMN "reason",
ADD COLUMN     "reason1" TEXT NOT NULL,
ADD COLUMN     "reason2" TEXT NOT NULL,
ADD COLUMN     "reason3" TEXT NOT NULL;
