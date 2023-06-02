/*
  Warnings:

  - You are about to drop the column `categoryId` on the `CategoryIcon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryIconId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryImageId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryId]` on the table `Subcategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CategoryIcon" DROP CONSTRAINT "CategoryIcon_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "categoryIconId" INTEGER,
ADD COLUMN     "categoryImageId" INTEGER;

-- AlterTable
ALTER TABLE "CategoryIcon" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "CategoryImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "key" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CategoryImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryIconId_key" ON "Category"("categoryIconId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryImageId_key" ON "Category"("categoryImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_categoryId_key" ON "Subcategory"("categoryId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_categoryIconId_fkey" FOREIGN KEY ("categoryIconId") REFERENCES "CategoryIcon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_categoryImageId_fkey" FOREIGN KEY ("categoryImageId") REFERENCES "CategoryImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
