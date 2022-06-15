export default class ErrosUtils {
  static tratarErro(error) {
    if (error.code == 11000) {
      if (error.keyValue.email) {
        throw {
          message: `O e-mail ${error.keyValue.email} já está sendo utilizado`,
        };
      } else if (error.keyValue.cpf) {
        throw {
          message: `O CPF ${error.keyValue.cpf} já está sendo utilizado`,
        };
      }
    } else {
      let erros = "";
      for (let campo of Object.keys(error.errors)) {
        erros += error.errors[campo].message;
      }
      throw { message: erros };
    }
    throw error;
  }
}
