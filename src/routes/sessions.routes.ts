import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try{
    const { email, password } = request.body;

    const userAuth = new AuthenticateUserService();

    const { user, token } = await userAuth.execute({email, password});

    return response.json({user, token});
  }catch(err){
    return response.status(400).json({ error: err.message });
  }
  
});

export default sessionsRouter;