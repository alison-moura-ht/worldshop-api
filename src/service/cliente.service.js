import ClienteModel from "../model/cliente.model.js";
import ErrosUtils from "../utils/erros.util.js";

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
      await ClienteModel.validate(cliente);
      return await ClienteModel.create(cliente);
    } catch (error) {
      ErrosUtils.tratarErro(error)
    }
  }

  static async atualizar(cliente) {
    try {
      return await ClienteModel.updateOne({ _id: cliente._id }, cliente);
    } catch (error) {
      throw error;
    }
  }

  static async remover(id) {
    try {
      return await ClienteModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }

}
