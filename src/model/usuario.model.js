import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
})

export default mongoose.model("Usuario", schema)