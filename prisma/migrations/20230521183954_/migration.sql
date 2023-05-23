/*
  Warnings:

  - A unique constraint covering the columns `[city]` on the table `SelfCheckout` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SelfCheckoutSection" ALTER COLUMN "sectionAddress" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SelfCheckout_city_key" ON "SelfCheckout"("city");
