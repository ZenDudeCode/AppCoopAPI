"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Prueba2Routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/prueba2', (req, res) => res.send('Hello prueba 2'));
    }
}
const prueba2Routes = new Prueba2Routes();
exports.default = prueba2Routes.router;
