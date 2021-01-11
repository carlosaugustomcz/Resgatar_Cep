import { Router } from 'express';
import BuscarCepController from './app/controllers/BuscarCepController';
import checarCep from './app/middleweares/cep';
import checarEndereco from './app/middleweares/endereco';


const routes = new Router();

// Consulta CEP
routes.get('/cep', checarCep, BuscarCepController.buscarEnderecoCep);

routes.get('/endereco', checarEndereco, BuscarCepController.buscarCepEndereco);


export default routes;