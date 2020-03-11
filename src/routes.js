import { Router } from 'express';

import T1 from './app/controllers/T1Controller';
import T2 from './app/controllers/T2Controller';
import T3 from './app/controllers/T3Controller';
import T4 from './app/controllers/T4Controller';
import T5 from './app/controllers/T5Controller';

import T1AlternativeController from './app/controllers/T1AlternativeController';
import T2AlternativeController from './app/controllers/T2AlternativeController';

const routes = new Router();

//Funciona mas não gostaria de utilizar, pois gera muitas requisições, trafego de rede
routes.post('/t1', T1.store);
routes.post('/t2', T2.store);
routes.post('/t3', T3.store);
routes.post('/t4', T4.store);
routes.post('/t5', T5.store);

//Como gostaria que funcionasse... HELP
routes.post('/t1a', T1AlternativeController.store);
routes.post('/t2a', T2AlternativeController.store);
export default routes;
