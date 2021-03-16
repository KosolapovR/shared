const ONLINE_DELAY = 60000 * 5; // 5 min

/**
 * Функция для получения статуса онлайна юзера по дате последнего апдейта
 *
 * @param lastUpdated {String} Дата последнего апдейта
 *
 * @return {Boolean} Статус онлайна юзера
 */
export default (lastUpdated) => {
  if (lastUpdated) {
    const isUserOnline = Date.now() - new Date(lastUpdated) < ONLINE_DELAY;
    return isUserOnline;
  }

  return false;
};
