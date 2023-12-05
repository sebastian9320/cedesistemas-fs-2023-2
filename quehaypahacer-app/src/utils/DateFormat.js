import moment from "moment"
import 'moment/dist/locale/es';

export const dateFormat = (
  dateTimeString,
  inputFormat = "YYYY-MM-DDTHH:mm:ss",
  outputFormat= "dddd, D MMMM YYYY - h:mm a",
  locale = "es"
) => {
  moment.locale(locale)
  let parsedDate = moment(dateTimeString, inputFormat);
  let formattedDate = parsedDate.format(outputFormat);
  return formattedDate;
}

