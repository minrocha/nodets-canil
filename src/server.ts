import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();

const server = express();

const PORT = process.env.PORT;

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.set('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Routers

server.listen(PORT, () =>
  console.log(`Servidor iniciado a na porta ${PORT}...`)
);
