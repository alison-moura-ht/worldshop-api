import express from "express";
import { verificar } from "../middleware/auth.middleware.js";
import { formatarData } from "./../utils/data.util.js";
import VendaService from "./../service/venda.service.js";
import ErrosUtils from "./../utils/erros.util.js";

const router = express.Router();

router.get("/vendas", verificar, async (req, res) => {
  try {
    res.json(await VendaService.buscarTodos());
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar vendas");
    console.log("Erro ao buscar vendas: " + error.message);
  }
});

router.get("/vendas/:id", verificar, async (req, res) => {
  try {
    res.json(await VendaService.buscarPorId(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar venda");
    console.log("Erro ao buscar venda por ID: " + error.message);
  }
});

router.post("/vendas", verificar, async (req, res) => {
  try {
    res.json(await VendaService.cadastrar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao cadastrar venda");
    console.log("Erro ao cadastrar venda: " + error.message);
  }
});

router.post("/vendas/:dataInicial/:dataFinal", verificar, async (req, res) => {
  try {
    res.json(
      await VendaService.buscarPorIntervalo(
        req.params.dataInicial,
        req.params.dataFinal
      )
    );
  } catch (error) {
    ErrosUtils.enviarResponseError(
      error,
      res,
      "Erro ao buscar vendas por intervalo de datas"
    );
  }
});

router.put("/vendas", verificar, async (req, res) => {
  try {
    res.json(await VendaService.atualizar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao atualizar venda");
    console.log("Erro ao atualizar venda: " + error.message);
  }
});

router.delete("/vendas/:id", verificar, async (req, res) => {
  try {
    res.json(await VendaService.remover(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao remover venda");
    console.log("Erro ao remover venda: " + error.message);
  }
});

export default router;
