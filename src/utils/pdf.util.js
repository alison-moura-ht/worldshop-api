import PDFDocument from "pdfkit-table";
import fs from "fs";
import { formatarDataLocal, formatarDataHoraLocal } from "./data.util.js";
import { formataBRL } from "./formatador.util.js";
const NOME_PDF = "relatorio_vendas.pdf";

export function gerarPDFVendas(vendas, dataInicial, dataFinal, res) {
  const doc = new PDFDocument();
  const vendasMap = vendas.map((el) => {
    return {
      data: formatarDataLocal(el.data),
      cliente: el.cliente.nome,
      usuario: el.usuario.nome,
      cancelado: el.cancelado,
      valorTotal: el.valorTotal,
    };
  });

  doc.pipe(fs.createWriteStream(NOME_PDF));
  doc.pipe(res);

  res.header({
    "Content-Type": "application/pdf",
    "Content-disposition": `attachment;filename=${NOME_PDF}`,
  });

  doc.fontSize(20).text("Relatório de Vendas", {
    align: "center",
  });
  doc.moveDown(2);
  doc
    .fontSize(8)
    .text(
      `Periodo de apuração: de ${formatarDataLocal(
        dataInicial
      )} a ${formatarDataLocal(dataFinal)}`,
      {
        align: "left",
      }
    );
  doc
    .fontSize(8)
    .text(`Data da solicitação: ${formatarDataHoraLocal(new Date())}`, {
      align: "left",
    });

  doc.moveDown(2);

  const table = {
    headers: [
      {
        label: "Data",
        property: "data",
        width: 50,
        renderer: null,
      },
      {
        label: "Cliente",
        property: "cliente",
        width: 120,
        renderer: null,
      },
      {
        label: "Vendedor",
        property: "usuario",
        width: 150,
        renderer: null,
      },
      {
        label: "Cancelado",
        property: "cancelado",
        width: 50,
        renderer: (value) => {
          return value ? "Sim" : "Não";
        },
      },
      {
        label: "Valor",
        property: "valorTotal",
        width: 100,
        renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
          return formataBRL(value);
        },
      },
    ],
    datas: vendasMap,
  };

  doc.table(table, {
    prepareHeader: () => doc.fontSize(8),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
      doc.fontSize(8);
      indexColumn === 0 && doc.addBackground(rectRow, "white", 0.15);
    },
  });

  doc.end();
}
