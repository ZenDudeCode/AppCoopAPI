import  {Request, Response} from 'express';

class IndexController{
   public  index (req: Request, res: Response){
        res.json({text: 'Hello pagina principal desde controlles'})
    } 
}

export const indexController = new IndexController();