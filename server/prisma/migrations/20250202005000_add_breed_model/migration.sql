/*
  Warnings:

  - You are about to drop the column `breedId` on the `Pet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_breedId_fkey";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "breedId";
