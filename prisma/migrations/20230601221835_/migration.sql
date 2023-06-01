-- DropIndex
DROP INDEX "Subcategory_categoryId_key";

-- AlterTable
ALTER TABLE "Subcategory" ALTER COLUMN "name" DROP NOT NULL;
