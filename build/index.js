"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // para que ts entienda esto  npm i @types/express -D
const morgan_1 = __importDefault(require("morgan")); // para que ts entienda esto npm i @types/morgan -D
const cors_1 = __importDefault(require("cors")); // para que ts entienda esto npm i @types/cors -D  
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const cooperativasRoutes_1 = __importDefault(require("./routes/cooperativasRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
//se crea una clase para definir el servidor e iniciarlo
class Server {
    // el constructor es el metodo que se ejecuta al instanciar la clase
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // este metodo se encarga de configurar la propiedad app
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); // para poder utilizar morgan para ver las peticiones get, post, put que se hacen al servidor
        this.app.use(cors_1.default()); // se utiliza para que angular pueda realizar peticiones al servidor
        this.app.use(express_1.default.json()); // Para aceptar formatos json en angular
        this.app.use(express_1.default.urlencoded({ extended: false })); // en caso de enviar desde un formalario html
    }
    // Para configurar las rutas del servidor
    routes() {
        // las rutas se van a definir en la carpeta routes
        this.app.use(indexRoutes_1.default);
        this.app.use('/cooperativas', cooperativasRoutes_1.default);
        this.app.use('/clientes', clientesRoutes_1.default);
    }
    //metodo para inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server(); // para ejecutar la clase y que devuela un objeto
server.start();
