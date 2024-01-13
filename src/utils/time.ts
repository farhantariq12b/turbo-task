import moment from "moment";

const formatDateTime = (date: string) => {
  if (!date) {
    return 'Invalid Date';
  }

  return moment(date).format('MMMM DD, YYYY')
}

export {
  formatDateTime
}