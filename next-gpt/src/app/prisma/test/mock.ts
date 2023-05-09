import { PrismaClient } from "@prisma/client"
import { DeepMockProxy, mockDeep, mockReset } from "jest-mock-extended"

import prisma from "@prisma"
jest.mock("../prisma", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prisma_mock)
})

export const prisma_mock = prisma as unknown as DeepMockProxy<PrismaClient>
