import i18n from '../i18next';

/**
 * Функция для получение текста в топик по ключу
 *
 * @param isClosed {Boolean} Один из параметров который нужен для определения  текста
 * @param isFixed {Boolean} Один из параметров который нужен для определения  текста
 * @returns {String} По ключу вернется текст для топика
 */
export default (isClosed, isFixed) => {
  if (isClosed) {
    return i18n.t('FORUM.LIST_TOPICS.TOPIC_CLOSED');
  }
  if (isFixed) {
    return i18n.t('FORUM.LIST_TOPICS.TOPIC_PINNED');
  }
  // case 'hot': title = t('FORUM.LIST_TOPICS.ACTIVE_DISCUSSION'); break;
  return i18n.t('FORUM.LIST_TOPICS.DISCUSSION_IN_PROGRESS');
};
