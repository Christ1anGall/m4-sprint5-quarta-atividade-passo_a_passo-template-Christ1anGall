import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userDeleteSelfService = async (email: string) => {
  const userRespository = AppDataSource.getRepository(User);
  const users = await userRespository.find();
  const account = users.find((user) => user.email === email);

  await userRespository.delete(account!.id);
  return true;
};

export default userDeleteSelfService;
