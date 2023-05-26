/*
  Warnings:

  - You are about to drop the column `categoryIconId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_categoryIconId_fkey";

-- DropIndex
DROP INDEX "Category_categoryIconId_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "categoryIconId";

-- AlterTable
ALTER TABLE "CategoryIcon" ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "CategoryIcon" ADD CONSTRAINT "CategoryIcon_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
