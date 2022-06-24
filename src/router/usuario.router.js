import express from "express";
import { verificar } from "../middleware/auth.middleware.js";
import UsuarioService from "./../service/usuario.service.js";
import ErrosUtils from "./../utils/erros.util.js";

const router = express.Router();

router.get("/usuarios", verificar, async (req, res) => {
  try {
    res.json(await UsuarioService.buscarTodos());
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar usuários");
    console.log("Erro ao buscar usuários: " + error.message);
  }
});

router.post("/usuarios", verificar, async (req, res) => {
  try {
    res.json(await UsuarioService.cadastrar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao cadastrar usuário");
    console.log("Erro ao cadastrar usuário: " + error.message);
  }
});

router.put("/usuarios", verificar, async (req, res) => {
  try {
    res.json(await UsuarioService.atualizar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao atualizar usuário");
    console.log("Erro ao atualizar usuário: " + error.message);
  }
});

router.delete("/usuarios/:id", verificar, async (req, res) => {
  try {
    res.json(await UsuarioService.remover(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao remover usuários");
    console.log("Erro ao remover usuário: " + error.message);
  }
});

export default router;
