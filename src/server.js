import express from "express";
import UsuarioRouter from "./router/usuario.router.js";
import ClienteRouter from "./router/cliente.router.js";
import AuthRouter from "./router/auth.router.js";

const api = express();
api.use(express.json()); // "Liberar" requisição com body JSON
api.use(UsuarioRouter);
api.use(ClienteRouter);
api.use(AuthRouter);

api.get("/", (req, res) => {
  res.send("API Wordshop");
});

export default api
