"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PruebaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/prueba', (req, res) => res.send('Hello Prueba'));
    }
}
const pruebaRoutes = new PruebaRoutes();
exports.default = pruebaRoutes.router;
