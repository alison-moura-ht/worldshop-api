
import ProdutoModel from "../model/produto.model.js";
import ErrosUtils from "../utils/erros.util.js";

export default class UsuarioService {

  static async buscarTodos() {
    try {
      return await ProdutoModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async cadastrar(produto) {
    try {
      await ProdutoModel.validate(produto);
      return await ProdutoModel.create(produto);
    } catch (error) {
      ErrosUtils.tratarErro(error);
    }
  }

  static async atualizar(produto) {
    try {
      return await ProdutoModel.updateOne({ _id: produto._id }, produto);
    } catch (error) {
      throw error;
    }
  }

  static async remover(id) {
    try {
      return await ProdutoModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}
