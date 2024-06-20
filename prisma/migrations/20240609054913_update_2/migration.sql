/*
  Warnings:

  - The `color` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `category` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `occasion` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `image` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sizes" TEXT[],
DROP COLUMN "color",
ADD COLUMN     "color" TEXT[],
DROP COLUMN "category",
ADD COLUMN     "category" TEXT[],
DROP COLUMN "occasion",
ADD COLUMN     "occasion" TEXT[],
DROP COLUMN "image",
ADD COLUMN     "image" TEXT[],
ALTER COLUMN "productDesc" DROP NOT NULL;
