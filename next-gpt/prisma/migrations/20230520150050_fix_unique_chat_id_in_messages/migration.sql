-- AlterTable
ALTER TABLE `Chat` ADD COLUMN `user_id` VARCHAR(191) NOT NULL DEFAULT '-1';

-- AlterTable
ALTER TABLE `Message` MODIFY `chat_id` VARCHAR(191) NOT NULL;
