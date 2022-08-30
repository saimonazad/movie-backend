/*
  Warnings:

  - The `vote_average` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "vote_average",
ADD COLUMN     "vote_average" DOUBLE PRECISION;
