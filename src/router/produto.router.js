import express from "express";
import { verificar } from "../middleware/auth.middleware.js";
import ProdutoService from "./../service/produto.service.js";
import ErrosUtils from "./../utils/erros.util.js";

const router = express.Router();

router.get("/produtos", verificar, async (req, res) => {
  try {
    res.json(await ProdutoService.buscarTodos());
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar produtos");
    console.log("Erro ao buscar produtos: " + error.message);
  }
});

router.get("/produtos/:id", verificar, async (req, res) => {
  try {
    res.json(await ProdutoService.buscarPorId(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar produto");
    console.log("Erro ao buscar produto por ID: " + error.mensagem);
  }
});

router.post("/produtos", verificar, async (req, res) => {
  try {
    res.json(await ProdutoService.cadastrar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao cadastrar produto");
    console.log("Erro ao cadastrar produto: " + error.message);
  }
});

router.put("/produtos", verificar, async (req, res) => {
  try {
    res.json(await ProdutoService.atualizar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao atualizar produto");
    console.log("Erro ao atualizar produto: " + error.message);
  }
});

router.delete("/produtos/:id", verificar, async (req, res) => {
  try {
    res.json(await ProdutoService.remover(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao remover produto");
    console.log("Erro ao remover produto: " + error.message);
  }
});

export default router;
