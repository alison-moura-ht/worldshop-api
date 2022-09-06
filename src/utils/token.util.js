import jwt from "jsonwebtoken";
const SECRET_KEY = "nskjdfhksjdfkjsdhf";

export default class TokenUtil {
  static gerarToken(objeto) {
    return jwt.sign(objeto, SECRET_KEY);
  }

  static validarToken(token) {
    if (!token) throw { message: "Token deve ser fornecido", status: 401 };
    try {
      jwt.verify(token, SECRET_KEY);
    } catch (error) {
      throw { message: "Token inválido", status: 401 };
    }
  }
}
