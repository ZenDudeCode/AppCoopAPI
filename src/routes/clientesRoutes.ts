import { Router } from 'express';

import {clientesController} from '../controllers/clientesController';

class ClientesRoutes {
  public router: Router = Router();

  constructor(){
    this.config();
  }
  config(): void{
    this.router.get('/', clientesController.listar); // buscar todos
    this.router.get('/:cd_nacion/:nu_cedula',clientesController.buscarCliente); // buscar uno
    this.router.post('/',clientesController.crearCliente); // guardar
    this.router.put('/:cd_nacion/:nu_cedula',clientesController.actualizarCliente); // modificar
    this.router.delete('/:cd_nacion/:nu_cedula',clientesController.eliminarCliente); // borrar
  }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;