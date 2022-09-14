import VendaModel from "../model/venda.model.js";
import ErrosUtils from "../utils/erros.util.js";

export default class VendaService {
  static async buscarTodos() {
    try {
      return await VendaModel.find()
        .populate("cliente", "nome email")
        .populate("usuario", "nome email")
        .populate("itens.produto", "descricao valorUnitario")
        .exec();
    } catch (error) {
      throw error;
    }
  }

  static async buscarPorId(id) {
    try {
      return await VendaModel.findById(id)
        .populate("usuario", "-senha")
        .populate("cliente", "-cpf -cep")
        .populate("itens.produto")
        .exec();
    } catch (error) {
      throw error;
    }
  }

  static async cadastrar(venda) {
    try {
      await VendaModel.validate(venda);
      return await VendaModel.create(venda);
    } catch (error) {
      ErrosUtils.tratarErro(error);
    }
  }

  static async atualizar(venda) {
    try {
      return await VendaModel.updateOne({ _id: venda._id }, venda);
    } catch (error) {
      throw error;
    }
  }

  static async remover(id) {
    try {
      return await VendaModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}
