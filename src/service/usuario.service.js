import jwt from "jsonwebtoken"
import UsuarioModel from "../model/usuario.model.js";
import ErrosUtils from "../utils/erros.util.js";

export default class UsuarioService {
  static async autenticar(email, senha) {
    try {
      const resultado = await UsuarioModel.findOne({ email: email, senha: senha }, "_id nome");
      const usuarioEncontrado = { _id: resultado._id, nome: resultado.nome }
      usuarioEncontrado.token = jwt.sign(usuarioEncontrado, "nskjdfhksjdfkjsdhf")
      return usuarioEncontrado
    } catch (error) {
      throw error;
    }
  }

  static async buscarTodos() {
    try {
      return await UsuarioModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async cadastrar(usuario) {
    try {
      await UsuarioModel.validate(usuario);
      return await UsuarioModel.create(usuario);
    } catch (error) {
      ErrosUtils.tratarErro(error);
    }
  }

  static async atualizar(usuario) {
    try {
      return await UsuarioModel.updateOne({ _id: usuario._id }, usuario);
    } catch (error) {
      throw error;
    }
  }

  static async remover(id) {
    try {
      return await UsuarioModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}
