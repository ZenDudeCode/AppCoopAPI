import { Router } from 'express';

import {cooperativaController} from '../controllers/cooperativasController';

class CooperativasRoutes {
  public router: Router = Router();

  constructor(){
    this.config();
  }
  config(): void{
    this.router.get('/',cooperativaController.listar);
    this.router.get('/:cd_coop',cooperativaController.buscarCooperativa);
    this.router.post('/',cooperativaController.crearCooperativa);
    this.router.delete('/:cd_coop',cooperativaController.eliminandoCooperativa);
    this.router.put('/:cd_coop',cooperativaController.actualizandoCooperativa);
  }
}

const cooperativasRoutes = new CooperativasRoutes();
export default cooperativasRoutes.router;