import express from "express";
import { verificar } from "../middleware/auth.middleware.js";
import ClienteService from "./../service/cliente.service.js";
import ErrosUtils from "./../utils/erros.util.js";

const router = express.Router();

router.get("/clientes", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.buscarTodos("-cpf"));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar clientes");
    console.log("Erro ao buscar clientes: " + error.message);
  }
});

router.get("/clientes/:id", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.buscarPorId(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar clientes");
    console.log("Erro ao buscar clientes: " + error.message);
  }
});

router.post("/clientes", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.cadastrar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao cadastrar cliente");
    console.log("Erro ao cadastrar cliente: " + error.message);
  }
});

router.put("/clientes", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.atualizar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao atualizar cliente");
    console.log("Erro ao atualizar cliente: " + error.message);
  }
});

router.delete("/clientes/:id", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.remover(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao remover cliente");
    console.log("Erro ao remover cliente: " + error.message);
  }
});

export default router;
