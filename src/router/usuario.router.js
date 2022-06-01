import express from "express"
import UsuarioService from "./../service/usuario.service.js"

const router = express.Router()

router.get("/usuarios", (req, res) => {
    res.json(UsuarioService.buscarTodos())
})

router.post("/usuarios", (req, res) => {
    UsuarioService.cadastrar(req.body)
    res.json({ message: "Usuário cadastrado com sucesso" })
})

router.put("/usuarios", (req, res) => {
    UsuarioService.atualizar(req.body)
    res.json({ message: "Usuário alterado com sucesso" })
})

router.delete("/usuarios", (req, res) => {
    UsuarioService.remover(req.body)
    res.json({ message: "Usuário removido com sucesso" })
})

export default router