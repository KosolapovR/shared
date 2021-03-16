/**
 * Функция которая вызывает модалку поддержки при клике на кнопку
 */
export default () => {
  if (window.Intercom) {
    window.Intercom('show');
  }
};
