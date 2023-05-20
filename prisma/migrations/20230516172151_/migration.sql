/*
  Warnings:

  - A unique constraint covering the columns `[discountId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_discountId_key" ON "Product"("discountId");
