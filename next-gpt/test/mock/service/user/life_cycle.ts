import { UserLifeCycleService } from "@modules/user/service/life_cycle"

jest.mock("../../../../src/app/modules/user/service/life_cycle")

export const lifeCycleServiceMock =
  UserLifeCycleService as jest.Mock<UserLifeCycleService>

export const mockLifeCycleService = () =>
  new lifeCycleServiceMock() as jest.Mocked<UserLifeCycleService>
