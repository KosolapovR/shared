const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
/**
 * Функция которая определяет единицу измерения информации файла
 *
 * @param bytes {Number} Размер загруженого файла, или по дефолту 0
 * @returns {string} Возвращает единицу измерения файла или сообщение о том что файл ничего не весит
 */
export default (bytes = 0) => {
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / (1024 ** i), 2)} ${sizes[i]}`;
};
