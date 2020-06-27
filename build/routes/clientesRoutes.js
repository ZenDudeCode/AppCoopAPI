"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = require("../controllers/clientesController");
class ClientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientesController_1.clientesController.listar); // buscar todos
        this.router.get('/:cd_nacion/:nu_cedula', clientesController_1.clientesController.buscarCliente); // buscar uno
        this.router.post('/', clientesController_1.clientesController.crearCliente); // guardar
        this.router.put('/:cd_nacion/:nu_cedula', clientesController_1.clientesController.actualizarCliente); // modificar
        this.router.delete('/:cd_nacion/:nu_cedula', clientesController_1.clientesController.eliminarCliente); // borrar
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
