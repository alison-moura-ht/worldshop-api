import ClienteModel from "../model/cliente.model.js";
import ErrosUtils from "../utils/erros.util.js";

export default class ClienteService {
  static async buscarTodos(props = "") {
    try {
      return await ClienteModel.find({}, props);
    } catch (error) {
      throw error;
    }
  }

  static async buscarPorId(id, props = "") {
    try {
      return await ClienteModel.findOne({ _id: id }, props);
    } catch (error) {
      throw error;
    }
  }

  static async cadastrar(cliente) {
    try {
      await ClienteModel.validate(cliente);
      return await ClienteModel.create(cliente);
    } catch (error) {
      ErrosUtils.tratarErro(error);
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
