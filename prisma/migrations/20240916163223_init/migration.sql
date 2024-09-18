/*
  Warnings:

  - You are about to drop the column `teacher_id` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the `teachers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `school_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "teacher_id",
ADD COLUMN     "school_id" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "teachers";
