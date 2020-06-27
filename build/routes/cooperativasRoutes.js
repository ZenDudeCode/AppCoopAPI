"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cooperativasController_1 = require("../controllers/cooperativasController");
class CooperativasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cooperativasController_1.cooperativaController.listar);
        this.router.get('/:cd_coop', cooperativasController_1.cooperativaController.buscarCooperativa);
        this.router.post('/', cooperativasController_1.cooperativaController.crearCooperativa);
        this.router.delete('/:cd_coop', cooperativasController_1.cooperativaController.eliminandoCooperativa);
        this.router.put('/:cd_coop', cooperativasController_1.cooperativaController.actualizandoCooperativa);
    }
}
const cooperativasRoutes = new CooperativasRoutes();
exports.default = cooperativasRoutes.router;
