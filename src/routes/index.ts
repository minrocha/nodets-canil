//6° importar bibliotecas necessárias para criar rotas
import { Router, Request, Response } from 'express';

//16° importamos o controllers
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

//7°"set/inciia" o router
const router = Router();

//9° e 17° configurar as rotas
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);

//8° exportar as rotas para uso externo
export default router;
