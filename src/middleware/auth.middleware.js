import TokenUtil from "./../utils/token.util.js";

export function verificar(req, res, next) {
  try {
    TokenUtil.validarToken(req.headers["x-access-token"]);
    next();
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Erro ao verificar autenticação" });
  }
}
