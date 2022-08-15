import express from "express";
import UsuarioService from "./../service/usuario.service.js";
import ErrosUtils from "./../utils/erros.util.js";
import { verificar } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/auth", async (req, res) => {
  try {
    const resultado = await UsuarioService.autenticar(
      req.body.email,
      req.body.senha
    );
    if (resultado) res.json(resultado);
    else res.status(404).json({ message: "Usuário não encontrado" });
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao autenticar");
    console.log("Erro ao buscar usuários: " + error.message);
  }
});

router.get("/auth", verificar, async (req, res) => {
  res.json({ message: "Token válido" });
});

export default router;
