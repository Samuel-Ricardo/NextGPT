/*
  Warnings:

  - You are about to drop the column `has_aswered` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Message` DROP COLUMN `has_aswered`,
    ADD COLUMN `has_answered` BOOLEAN NOT NULL DEFAULT false;
