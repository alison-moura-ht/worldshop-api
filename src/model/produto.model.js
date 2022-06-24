import mongoose from "mongoose";

const schema = new mongoose.Schema({
  descricao: { type: String, required: [true, "descrição obrigatória "] },
  detalhes: { type: String, required: false },
  valorUnitario: { type: Number, required: [true, "valor un. obrigatório "] },
});

export default mongoose.model("Produto", schema);
