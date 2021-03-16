import cipher from 'node-forge/lib/cipher';
import util from 'node-forge/lib/util';

/**
 * Функция для дешифровки сообщения
 *
 * @param message {String} Сообщение для дешифровки
 * @param aes {String} Строка с ключем
 * @returns {String} Строку с дешифрованым сообщением || пустую строку
 */
export default (message, aes) => {
  try {
    const decipher = cipher.createDecipher('AES-CBC', util.hexToBytes(aes));
    decipher.start({ iv: process.env.FRONT_IV});
    const buffer = util.createBuffer(util.hexToBytes(message));
    decipher.update(buffer);
    decipher.finish();
    const body = decipher.output.toHex();
    return util.decodeUtf8(util.hexToBytes(body)) || '';
  } catch (e) {
    // если не удалось дешифровать сообщение, возвращаем пустую строку
    return '';
  }
};
