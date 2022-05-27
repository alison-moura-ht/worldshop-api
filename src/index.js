import express from "express"
import UsuarioRouter from "./router/usuario.router.js"

const PORT = 3000
const api = express()

api.use(express.json()) // "Liberar" requisição com body JSON
api.use(UsuarioRouter)

api.get("/", (req, res) => {
    res.send("API Wordshop")
})

api.listen(PORT, () => {
    console.log(`API rodando na porta: ${PORT}`)
})