"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class SocioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/socio', (req, res) => res.send('Hello Socio'));
    }
}
const socioRoutes = new SocioRoutes();
exports.default = socioRoutes.router;
