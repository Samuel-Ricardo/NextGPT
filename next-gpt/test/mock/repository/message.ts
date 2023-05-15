import { prisma_mock } from "@prisma/test/mock"
import { PrismaMessageRepository } from "@repository/prisma/message"

jest.mock("../../src/app/repository/prisma/message")

export const messageRepositoryMock =
  PrismaMessageRepository as jest.Mock<PrismaMessageRepository>

export const mockMessageRepository = () =>
  new messageRepositoryMock(prisma_mock) as jest.Mocked<PrismaMessageRepository>
