// 1°importamos as bibliotecas que seão utilizadas
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

// 2° configuracao do arquivo que ira armazenar as variaveis de ambiente, juntamente criamos na raiz do projeto o arquivo .env
dotenv.config();

// 3° Servidor
const server = express();

// 4° configuracao do template enginer. Criamos na pasta src uma nova pasta chamada views que irá armazenar nossos arquivos mustaches
server.set('view engine', mustache); //configura nossa tamplete engine
server.set('views', path.join(__dirname, 'views')); //configura pastas de visualizacao dos arquivos mustache do nosso projeto
server.engine('mustache', mustache()); //set a engine mustache

//5° configura pasta publica, criamos tamb´´em na raiz do projeto a pasta 'public'
server.use(express.static(path.join(__dirname, '../public'))); //coonfigura pasta de arquivos estaticos

//rotas

server.listen(process.env.PORT, () =>
  console.log(`Servidor iniciado na porta ${process.env.PORT}`)
);
