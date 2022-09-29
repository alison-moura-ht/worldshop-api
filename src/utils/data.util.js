import moment from "moment-timezone";

export function formatarData(data) {
  const dataFmt = moment(data);
  return dataFmt.tz("America/Campo_Grande").format()
}

export function formatarDataLocal(data) {
  const dataFmt = moment(data);
  return dataFmt.tz("America/Campo_Grande").format("DD/MM/yyyy")
}

export function formatarDataHoraLocal(data) {
  const dataFmt = moment(data);
  return dataFmt.tz("America/Campo_Grande").format("DD/MM/yyyy HH:mm")
}
