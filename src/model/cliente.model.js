import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  cpf: { type: String, unique: true, required: true },
  cep: { type: String, required: true },
});

export default mongoose.model("Cliente", schema);
