import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload{
  int: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void{

  const authHeader = request.headers.authorization;

  if (!authHeader){
    throw new Error('JWT authentication token is missing');
  }

  const [ type , token ] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);
    
    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw Error('Invalid token')
  }

}