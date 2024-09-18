/*
  Warnings:

  - Changed the type of `school_id` on the `courses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "school_id",
ADD COLUMN     "school_id" INTEGER NOT NULL;
