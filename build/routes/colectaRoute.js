"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ColectaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/colecta', (req, res) => res.send('Hello Colecta'));
    }
}
const colectaRoutes = new ColectaRoutes();
exports.default = colectaRoutes.router;
