import express from "express";
import mongoose from "mongoose";
import UsuarioRouter from "./router/usuario.router.js";

const PORT = 3000;

async function init() {
  const api = express();
  api.use(express.json()); // "Liberar" requisição com body JSON
  api.use(UsuarioRouter);

  api.get("/", (req, res) => {
    res.send("API Wordshop");
  });

  // Conexão com o MongoDB Atlas
  await mongoose.connect(
    "mongodb+srv://mongodb:i7IqzxMR3XditDho@dev.tcgr9kc.mongodb.net/worldshop?retryWrites=true&w=majority"
  );

  api.listen(PORT, () => {
    console.log(`API rodando na porta: ${PORT}`);
  });
}

init()