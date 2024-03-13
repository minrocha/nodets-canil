// 1°importamos as bibliotecas que seão utilizadas
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from '../src/routes/index'; //biblioteca importada após o passo 9°

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

// 10° rotas. No passo 6°criamos dentro da pasta src uma nova pasta chamada 'routes'. Dentro de routes criamos um arquivo chamado 'index.ts' onde iremos criar as nossas rotas.
server.use(mainRoutes);

//11° criando rota para página não encontrada
server.use((req: Request, res: Response) => {
  res.send(`Página não encontrada`);
});

//12° já deixar preparado os controllers. Criamos em src uma nova pasta chamada 'controllers', outra chamada 'models' para já deixar a estrutura MVC completa.

//13° Em seguida já criamos nossos dois controllers 'pageController.ts' e 'searchController.ts'.

//14° Já criamos a estrutura dos controllers para inserir nas rotas

server.listen(process.env.PORT, () =>
  console.log(`Servidor iniciado na porta ${process.env.PORT}`)
);
