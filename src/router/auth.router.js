import express from "express";
import UsuarioService from "./../service/usuario.service.js";
import ErrosUtils from "./../utils/erros.util.js";

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

export default router;
