import moment from 'moment';

/**
 * Возвращает массив с информацией по временным точкам для отображения тиков на графике
 *
 * @param {object} params
 * @param {array} params.snapshots - массив с объектами, должно быть поле date с датой
 * @param {string} params.timeFormat - такой же как передаётся в moment.format
 *
 * @returns {string}
 */
export default ({
  snapshots,
  timeFormat,
  maxCountTicks = 5,
}) => {
  const res = [];

  if (!(snapshots.length && timeFormat)) {
    return res;
  }

  const step = (100 / (maxCountTicks - 1)) / (100 / (snapshots.length - 1));

  for (let point = 0; point < snapshots.length; point += step) {
    const snapshot = snapshots[Math.floor(point)];

    let currentValue = moment(snapshot.date);
    if (currentValue.startOf('hours').minute() >= 30) {
      currentValue = currentValue.add(1, 'hours');
    }
    currentValue = currentValue.minute(0).format(timeFormat);

    if (res[res.length - 1] !== currentValue) {
      res.push(currentValue);
    }
  }

  return res;
};
