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
exports.clientesController = void 0;
const database_1 = __importDefault(require("../database"));
class ClientesController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query('SELECT * FROM CLIENTE');
            res.json(clientes);
        });
    }
    crearCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO CLIENTE  SET ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Creando cliente' });
        });
    }
    eliminarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cd_nacion } = req.params;
            const { nu_cedula } = req.params;
            yield database_1.default.query('DELETE FROM CLIENTE WHERE CD_NACION = ? AND NU_CEDULA = ?', [cd_nacion, nu_cedula]);
            res.json({ text: 'Cliente eliminada' });
        });
    }
    actualizarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cd_nacion } = req.params;
            const { nu_cedula } = req.params;
            yield database_1.default.query('UPDATE  CLIENTE SET ? WHERE CD_NACION = ? AND NU_CEDULA = ?', [req.body, cd_nacion, nu_cedula]);
            res.json({ message: 'Cliente actualizada ' + req.params.cd_nacion + '-' + nu_cedula });
        });
    }
    buscarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cd_nacion } = req.params;
            const { nu_cedula } = req.params;
            const cliente = yield database_1.default.query('SELECT * FROM CLIENTE WHERE CD_NACION = ? AND NU_CEDULA = ? ', [cd_nacion, nu_cedula]);
            if (cliente.length > 0) {
                return res.json(cliente);
            }
            res.status(404).json({ text: ' El cliente no existe' });
        });
    }
}
exports.clientesController = new ClientesController();
