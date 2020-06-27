import express, { Application } from 'express'; // para que ts entienda esto  npm i @types/express -D
import morgan from 'morgan'; // para que ts entienda esto npm i @types/morgan -D
import cors from 'cors'; // para que ts entienda esto npm i @types/cors -D  


import indexRoutes from './routes/indexRoutes';
import cooperativasRoutes from  './routes/cooperativasRoutes';
import clientesRoutes from './routes/clientesRoutes';

//se crea una clase para definir el servidor e iniciarlo

class Server {

    public app: Application; 
    // el constructor es el metodo que se ejecuta al instanciar la clase
    constructor(){
       this.app = express();
       this.config();
       this.routes();
    }

    // este metodo se encarga de configurar la propiedad app
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); // para poder utilizar morgan para ver las peticiones get, post, put que se hacen al servidor
        this.app.use(cors()); // se utiliza para que angular pueda realizar peticiones al servidor
        this.app.use(express.json()); // Para aceptar formatos json en angular
        this.app.use(express.urlencoded({extended: false})); // en caso de enviar desde un formalario html
    }

    // Para configurar las rutas del servidor
    routes(): void{
       // las rutas se van a definir en la carpeta routes
        this.app.use(indexRoutes);
        this.app.use('/cooperativas',cooperativasRoutes);
        this.app.use('/clientes',clientesRoutes);
    }

    //metodo para inicializar el servidor
    start(): void{
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Server on port ', this.app.get('port'))
        });
    }
}

const server = new Server(); // para ejecutar la clase y que devuela un objeto
server.start();