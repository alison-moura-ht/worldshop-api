import moment from "moment-timezone";

export function formatarData(data) {
  const dataFmt = moment(data);
  return dataFmt.tz("America/Campo_Grande").format()
}
