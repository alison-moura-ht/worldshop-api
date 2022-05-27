import express from "express"
const usuariosCadastrados = []

const router = express.Router()

router.get("/usuarios", (req, res) => {
    res.json(usuariosCadastrados)
})

router.post("/usuarios", (req, res) => {
    usuariosCadastrados.push(req.body)
    res.json({ message: "Usuário cadastrado com sucesso" })
})

export default router