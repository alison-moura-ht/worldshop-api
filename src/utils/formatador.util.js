export function formataBRL(valor) {
  if (valor == NaN || typeof valor != "number") return "R$ 0,00";
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
