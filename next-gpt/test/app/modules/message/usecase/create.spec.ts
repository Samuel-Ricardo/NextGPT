import { CreateMessageUseCase } from "@/app/modules/message/usecase/create"
import { PrismaMessageRepository } from "@repository/prisma/message"
import { mockMessageRepository } from "@test/mock/repository"

describe("[USECASE] => Create Message", () => {
  let repository: jest.Mocked<PrismaMessageRepository>
  let create: CreateMessageUseCase

  beforeEach(() => {
    repository = mockMessageRepository()
    create = new CreateMessageUseCase(repository)
  })

  it("should be able to create a message", async () => {})
})
