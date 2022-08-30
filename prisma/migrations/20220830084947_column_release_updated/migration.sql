/*
  Warnings:

  - The `release_date` column on the `movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "release_date",
ADD COLUMN     "release_date" TIMESTAMP(3);
