import  {Request, Response} from 'express';

import pool from '../database'

class CooperativaController{
   public  async listar (req: Request, res: Response){
      const cooperativas = await pool.query('SELECT * FROM COOPERATIVA');
        res.json(cooperativas);
    } 
    public async crearCooperativa (req: Request, res: Response): Promise <void> {
        await pool.query('INSERT INTO COOPERATIVA SET ?',[req.body]);
        console.log(req.body);
        res.json({message: 'Creando cooperativa'});
    }
    public async eliminandoCooperativa (req: Request, res: Response):Promise<void>{
        const {cd_coop} = req.params;
        await pool.query('DELETE FROM COOPERATIVA WHERE CD_COOP = ?', [cd_coop]);
        res.json({text: 'Cooperativa eliminada'});
    }
    public async actualizandoCooperativa (req: Request, res: Response): Promise<void>{
        const {cd_coop} = req.params;
        await pool.query('UPDATE  COOPERATIVA SET ? WHERE CD_COOP = ?', [req.body,cd_coop]);
        res.json({message: 'Cooperativa actualizada ' + req.params.cd_coop});
    }
    public async buscarCooperativa (req: Request, res: Response):Promise<any>{
        const { cd_coop } = req.params;
        const cooperativa = await pool.query('SELECT * FROM COOPERATIVA WHERE CD_COOP = ?',[cd_coop]);
        if (cooperativa.length >0) {
            return res.json(cooperativa[0]);
        }
        res.status(404).json({text:' La cooperativa no existe'});

    }
}

export const cooperativaController = new CooperativaController();