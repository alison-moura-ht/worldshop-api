import mongoose from "mongoose";

const schema = new mongoose.Schema({
  valorTotal: { type: Number, required: [true, "valor total obrigatório "] },
  data: { type: Date, required: [true, "data da venda obrigatória "] },
  cancelado: { type: Boolean, default: false },
  cliente: {
    type: mongoose.Types.ObjectId,
    ref: "Cliente",
    required: [true, "cliente da venda obrigatório "],
  },
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: "Usuario",
    required: [true, "usuário da venda obrigatório "],
  },
  itens: [
    {
      quantidade: { type: Number, required: true },
      produto: {
        type: mongoose.Types.ObjectId,
        ref: "Produto",
        required: true,
      },
    },
  ],
});

export default mongoose.model("Venda", schema);
