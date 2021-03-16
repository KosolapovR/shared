/**
 * Функция которая проверяет находится ли канал с определенным типом,
 * в storage в списке закрытых каналов
 *
 * @param type {String} Тип канала
 * @param channelId {String} Ид канала
 * @returns {String} Возвращает строку по ключу
 */
export const isClosed = (type, channelId) =>
  (localStorage.getItem('closedMessages') || '[]').split(',').find(item =>
    item === `${channelId}_${type}`);
/**
 * Функция которая записывает в storage информацию о том что определенный канал
 * был закрыт
 *
 * @param channelId {String} Ид канала
 * @param type {String} Тип канала
 */
export const close = (channelId, type) => {
  const closedMessagesString = localStorage.getItem('closedMessages');
  const closedMessages = closedMessagesString ? closedMessagesString.split(',') : [];
  closedMessages.push(`${channelId}_${type}`);
  localStorage.setItem('closedMessages', closedMessages.join(','));
};
