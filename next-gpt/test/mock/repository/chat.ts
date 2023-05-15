import { prisma_mock } from "@prisma/test/mock"
import { ChatPrismaRepository } from "@repository/prisma/chat"

jest.mock("../../src/app/repository/prisma/chat.ts")

export const chatRepositoryMock =
  ChatPrismaRepository as jest.Mock<ChatPrismaRepository>

export const mockChatRepository = () =>
  new chatRepositoryMock(prisma_mock) as jest.Mocked<ChatPrismaRepository>
