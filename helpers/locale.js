const LOCALE = 'locale';
/**
 * Функция которая добавляет в storage новый язык
 *
 * @param value {String} Язык который нужно добавить
 */
export const setLanguage = value => localStorage.setItem(LOCALE, value);
/**
 * Функция которая достает язык со storage
 *
 * @returns {String} Возвращает этот язык
 */
export const getLanguage = () => localStorage.getItem(LOCALE) || localStorage.getItem('i18nextLng', 'en-En').split('-')[0];
