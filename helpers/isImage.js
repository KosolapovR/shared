/**
* Функция, которая проверяет является ли файл картинкой
*
* @param {String} filename - имя файла с форматом
*
* @returns {Boolean} Булевое значение, true - если файл является картинкой, иначе false
 */

const getExtension = (filename) => {
  const parts = filename.split('.');
  return parts[parts.length - 1];
};

export default (filename) => {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'jpg':
    case 'gif':
    case 'bmp':
    case 'png':
    case 'jpeg':
      return true;
    default:
      return false;
  }
};
