"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cooperativaController = void 0;
const database_1 = __importDefault(require("../database"));
class CooperativaController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cooperativas = yield database_1.default.query('SELECT * FROM COOPERATIVA');
            res.json(cooperativas);
        });
    }
    crearCooperativa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO COOPERATIVA SET ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Creando cooperativa' });
        });
    }
    eliminandoCooperativa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cd_coop } = req.params;
            yield database_1.default.query('DELETE FROM COOPERATIVA WHERE CD_COOP = ?', [cd_coop]);
            res.json({ text: 'Cooperativa eliminada' });
        });
    }
    actualizandoCooperativa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cd_coop } = req.params;
            yield database_1.default.query('UPDATE  COOPERATIVA SET ? WHERE CD_COOP = ?', [req.body, cd_coop]);
            res.json({ message: 'Cooperativa actualizada ' + req.params.cd_coop });
        });
    }
    buscarCooperativa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cd_coop } = req.params;
            const cooperativa = yield database_1.default.query('SELECT * FROM COOPERATIVA WHERE CD_COOP = ?', [cd_coop]);
            if (cooperativa.length > 0) {
                return res.json(cooperativa[0]);
            }
            res.status(404).json({ text: ' La cooperativa no existe' });
        });
    }
}
exports.cooperativaController = new CooperativaController();
