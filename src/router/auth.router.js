import express from "express"
import UsuarioService from "./../service/usuario.service.js"

const router = express.Router()

router.post("/auth", async (req, res) => {
    try {
        const resultado = await UsuarioService.autenticar(req.body.email, req.body.senha)
        if(resultado) res.json(resultado)
        else res.status(400).json({ message: "Usuário não encontrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log("Erro ao buscar usuários: " + error.message)
    }
})

export default router