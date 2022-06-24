import api from "./server.js"
import { connect } from "./db/index.js";

const PORT = 3000;

async function init() {
  // Conexão com o MongoDB Atlas
  await connect()
  console.log("Banco de dados conectado com sucesso!")

  api.listen(PORT, () => {
    console.log(`API rodando na porta: ${PORT}`);
  });
}

init();
