"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'Hello pagina principal desde controlles' });
    }
}
exports.indexController = new IndexController();
