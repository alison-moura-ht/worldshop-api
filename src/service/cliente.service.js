import * as cpf from "@fnando/cpf";
import ClienteModel from "../model/cliente.model.js";

export default class ClienteService {
  static async buscarTodos() {
    try {
      return await ClienteModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async cadastrar(cliente) {
    try {
      ClienteService.validar(cliente)
      return await ClienteModel.create(cliente)
    } catch (error) {
      throw error;
    }
  }

  static async atualizar(cliente) {
    try {
      return await ClienteModel.updateOne({ _id: cliente._id }, cliente)
    } catch (error) {
      throw error;
    }
  }

  static async remover(id) {
    try {
      return await ClienteModel.deleteOne({ _id: id })
    } catch (error) {
      throw error;
    }
  }

  static validar(cliente) {
    let erro = ""
    if(!cpf.isValid(cliente.cpf, true)) erro = "CPF inválido"

    if(erro) throw { message: erro, status: 400 }
  }
}
