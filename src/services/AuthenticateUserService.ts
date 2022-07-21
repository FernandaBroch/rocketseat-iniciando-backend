import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign, verify } from 'jsonwebtoken';
import authConfig from '../config/auth'
import User from '../models/User';

interface Request{
  email: string;
  password: string,
}

interface Response{
  user: User,
  token: string
}
class AuthenticateUserService{
  public execute = async ({ email, password }: Request):Promise<Response> => {
    const user = await getRepository(User).findOne({
      where: { email }
    })

    if(!user){
      throw new Error('Wrong Email/Password');
    }

    const token = sign({  }, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    const passwordValidation = await compare(password, user.password);

    if(!passwordValidation){
      throw new Error('Wrong Email/Password')
    }

    return {
      user,
      token
    };

  }
  
}
export default AuthenticateUserService;