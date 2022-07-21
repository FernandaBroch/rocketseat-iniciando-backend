import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/User';


interface Request{
  name: string;
  email: string;
  password: string;
}
class CreateUserService{
  public execute = async ({ name, email, password }: Request): Promise<User> => {
    const usersRepository = getRepository(User);
    
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if(checkUserExists){
      throw Error('Email address already used.');
    }

    const hashedPassword = await hash(password, 10);

    const user = usersRepository.create({
      name: name,
      email: email,
      password: hashedPassword,
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;