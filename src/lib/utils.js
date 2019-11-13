import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export function formatDate(timestamp) {
  return moment.unix(timestamp).format('MMM DD, YYYY');
}
