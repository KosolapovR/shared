import { DEAL_STATUSES } from '../consts';

/**
 * Функция нужна для получения списка действий в сделке, отсортированые по дате
 *
 * @param actionsLog {Immutable} Список действий проведеных в сделке
 * @returns {Immutable} Отсортированый список действий по дате
 */
export default actionsLog => actionsLog.keySeq().sort((previous, next) =>
  new Date(actionsLog.get(next)) - new Date(actionsLog.get(previous)))
  .filter(log =>
    ![DEAL_STATUSES.RATED, DEAL_STATUSES.UNRATED, DEAL_STATUSES.PRE_INITIALIZED].includes(log));
