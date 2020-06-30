import 'reflect-metadata';
import express from 'express';
import routes from './routes';

// executa a crição da conexão com a base de dados
import './database';

const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello GoStack!' });
});

app.listen(3333, () => {
  console.log('🚀 Server started!');
});
