import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing.');
  }

  // o token está no formato Bearer kjfskljfslkfj
  // a função split irá seperar as strings pelo espaço dentro de um array
  // a desestruturação abaixo ignora a primeira posição do array e só utiliza a segunda
  const [, token] = authHeader.split(' ');

  // verify retorna um erro caso nao encontra erro, por isso o try catch
  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // como acima decoded não tem um tipo definido, abaixo estou forçando um tipo
    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new Error('Invalid JWT token.');
  }
}
