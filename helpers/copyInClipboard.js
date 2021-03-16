/**
 * Функция которая позволяет скопировать определенный текс в буфер обмена
 *
 * @param text {String} Текст который нужно скопировать в буфер
 *
 * При наличии обьекта clipboard копирует текст в буффер обмена,
 * если  его нет делает все тоже, но через создание TextArea
 */
export default (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }

  const textArea = document.createElement('textArea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};
