import UsuarioModel from "../model/usuario.model.js";

export default class UsuarioService {
  static async buscarTodos() {
    try {
      return await UsuarioModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async cadastrar(usuario) {
    try {
      return await UsuarioModel.create(usuario)
    } catch (error) {
      throw error;
    }
  }

  static async atualizar(usuario) {
    try {
      return await UsuarioModel.updateOne({ _id: usuario._id }, usuario)
    } catch (error) {
      throw error;
    }
  }

  static async remover(id) {
    try {
      return await UsuarioModel.deleteOne({ _id: id })
    } catch (error) {
      throw error;
    }
  }
}
