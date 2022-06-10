import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true }
})

export default mongoose.model("Usuario", schema)