import express from "express";
import { verificar } from "../middleware/auth.middleware.js";
import ClienteService from "./../service/cliente.service.js";

const router = express.Router();

router.get("/clientes", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.buscarTodos());
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar clientes" });
    console.log("Erro ao buscar clientes: " + error.message);
  }
});

router.post("/clientes", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.cadastrar(req.body));
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Erro ao cadastrar cliente" });
    console.log("Erro ao cadastrar cliente: " + error.message);
  }
});

router.put("/clientes", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.atualizar(req.body));
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar cliente" });
    console.log("Erro ao atualizar cliente: " + error.message);
  }
});

router.delete("/clientes/:id", verificar, async (req, res) => {
  try {
    res.json(await ClienteService.remover(req.params.id));
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover cliente" });
    console.log("Erro ao remover cliente: " + error.message);
  }
});

export default router;
