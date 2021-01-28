import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

// executa a crição da conexão com a base de dados
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

// o cors é um elemento de segurança para as requisições feitas através de um browser, não é usado para Insomnia nem react-native
app.use(cors());
app.use(express.json());

// para acessar os arquivos pelo browser localgost:3333/files/nome_do_arquivo
app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use(routes);

app.use(errors());

// middleware para tratamento global dos erros
// abaixo a função next foi renomeada para _ para que o eslint a ignore (tem que ter uma rule no eslintrc)
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // verifica se err é uma instancia da classe APpError, ou seja, um erro conhecido e ja tratado pela aplicação
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  // é um erro que a aplicação nao estava esperando, manda-se uma mensagem genérica
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.get('/', (request, response) => {
  return response.json({ message: 'Hello GoStack!' });
});

app.listen(3333, () => {
  console.log('🚀 Server started!');
});
