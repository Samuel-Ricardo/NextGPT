import { UserLifeCycleService } from "@modules/user/service/life_cycle"

const lifeCycleServiceMock =
  UserLifeCycleService as jest.Mock<UserLifeCycleService>

const mockLifeCycleService = () =>
  new lifeCycleServiceMock() as jest.Mocked<UserLifeCycleService>
