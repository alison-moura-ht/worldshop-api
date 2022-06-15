import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nome: { type: String, required: [true, "nome obrigatório "] },
  email: {
    type: String,
    unique: true,
    required: [true, "e-mail obrigatório "],
  },
  senha: { type: String, required: [true, "senha obrigatória "] },
});

export default mongoose.model("Usuario", schema);
