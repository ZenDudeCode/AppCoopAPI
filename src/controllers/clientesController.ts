import  {Request, Response} from 'express';

import pool from '../database';

class ClientesController{
   public  async listar (req: Request, res: Response){
        const clientes = await pool.query('SELECT * FROM CLIENTE');
        res.json(clientes);
    } 
    public async crearCliente (req: Request, res: Response): Promise <void> {
        await pool.query('INSERT INTO CLIENTE  SET ?',[req.body]);
        console.log(req.body);
        res.json({message: 'Creando cliente'});
    }
    public async eliminarCliente (req: Request, res: Response):Promise<void>{
        const {cd_nacion} = req.params;
        const {nu_cedula} = req.params;
        await pool.query('DELETE FROM CLIENTE WHERE CD_NACION = ? AND NU_CEDULA = ?', [cd_nacion, nu_cedula]);
        res.json({text: 'Cliente eliminada'});
    }
    public async actualizarCliente (req: Request, res: Response): Promise<void>{
        const {cd_nacion} = req.params;
        const {nu_cedula} = req.params;
        await pool.query('UPDATE  CLIENTE SET ? WHERE CD_NACION = ? AND NU_CEDULA = ?', [req.body,cd_nacion,nu_cedula]);
        res.json({message: 'Cliente actualizada ' + req.params.cd_nacion + '-' + nu_cedula});
    }
    public async buscarCliente (req: Request, res: Response):Promise<any>{
        const {cd_nacion} = req.params;
        const {nu_cedula} = req.params;
        const cliente = await pool.query('SELECT * FROM CLIENTE WHERE CD_NACION = ? AND NU_CEDULA = ? ', [cd_nacion, nu_cedula]);
        if (cliente.length >0 ) {
            return res.json(cliente);
      }
        res.status(404).json({text:' El cliente no existe'});

    } 
}

export const clientesController = new ClientesController();