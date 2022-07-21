import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

// app.get('/', (request, response) => {
//   return response.json({
//     message: 'It works!'
//   })
// })

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Subiu na porta 3333' );
})