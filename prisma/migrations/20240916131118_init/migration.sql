/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `regions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "regions_name_key" ON "regions"("name");
