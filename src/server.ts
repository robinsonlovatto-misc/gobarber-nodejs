import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

// executa a crição da conexão com a base de dados
import './database';

const app = express();
app.use(express.json());
app.use(routes);
// para acessar os arquivos pelo browser localgost:3333/files/nome_do_arquivo
app.use('/files', express.static(uploadConfig.directory));

app.get('/', (request, response) => {
  return response.json({ message: 'Hello GoStack!' });
});

app.listen(3333, () => {
  console.log('🚀 Server started!');
});
