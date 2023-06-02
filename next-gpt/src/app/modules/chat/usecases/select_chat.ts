import { ISelectChatDTO } from "../DTO"
import { IChatRepository } from "../repository"

export class SelectChatByIdUseCase {
  constructor(private readonly repository: IChatRepository) {}

  async execute(data: ISelectChatDTO) {
    return await this.repository.selectById(data)
  }
}
