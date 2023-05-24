/*
  Warnings:

  - You are about to drop the column `productImageId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productImageId_fkey";

-- DropIndex
DROP INDEX "CartItem_productId_key";

-- DropIndex
DROP INDEX "Product_productImageId_key";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "selfCheckoutAddressId" INTEGER;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productImageId";

-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "productId" INTEGER;

-- CreateTable
CREATE TABLE "SelfCheckout" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SelfCheckout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelfCheckoutSection" (
    "id" SERIAL NOT NULL,
    "selfCheckoutId" INTEGER NOT NULL,
    "sectionNumber" INTEGER NOT NULL,
    "sectionAddress" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SelfCheckoutSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_selfCheckoutAddressId_fkey" FOREIGN KEY ("selfCheckoutAddressId") REFERENCES "SelfCheckoutSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelfCheckoutSection" ADD CONSTRAINT "SelfCheckoutSection_selfCheckoutId_fkey" FOREIGN KEY ("selfCheckoutId") REFERENCES "SelfCheckout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
