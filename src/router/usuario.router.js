import express from "express"
import UsuarioService from "./../service/usuario.service.js"

const router = express.Router()

router.get("/usuarios", (req, res) => {
    try {
        res.json(UsuarioService.buscarTodos())
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários" })
        console.log("Erro ao buscar usuários: " + error.message)
    }
})

router.post("/usuarios", (req, res) => {
    try {
        UsuarioService.cadastrar(req.body)
        res.json({ message: "Usuário cadastrado com sucesso" })
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar usuário" })
        console.log("Erro ao cadastrar usuário: " + error.message)
    }
})

router.put("/usuarios", (req, res) => {
    try {
        UsuarioService.atualizar(req.body)
        res.json({ message: "Usuário alterado com sucesso" })
    } catch (error) {
        res.status(500).json( message: "Erro ao atualizar usuário" )
        console.log("Erro ao atualizar usuário: " + error.message);
    }
})

router.delete("/usuarios", (req, res) => {
    try {
        UsuarioService.remover(req.body)
        res.json({ message: "Usuário removido com sucesso" })
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover usuário" })
        console.log("Erro ao remover usuário: " + error.message);
    }
})

export default router