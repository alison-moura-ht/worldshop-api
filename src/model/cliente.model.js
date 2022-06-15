import mongoose from "mongoose";
import * as cpf from "@fnando/cpf";

const schema = new mongoose.Schema({
  nome: { type: String, required: [true, "nome obrigatório "] },
  email: {
    type: String,
    unique: true,
    required: [true, "e-mail obrigatório "],
  },
  cpf: {
    type: String,
    unique: true,
    required: [true, "cpf obrigatório "],
    validate: {
      validator: function (v) {
        return cpf.isValid(v, true);
      },
      message: (props) => `CPF inválido`,
    },
  },
  cep: { type: String, required: [true, "cep obrigatório "] },
});

export default mongoose.model("Cliente", schema);
