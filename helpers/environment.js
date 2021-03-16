/**
 * Функция которая проверяет среду разработки
 *
 * @returns {Boolean} Булевое значение
 */
const getEnv = () => process && process.env && process.env.NODE_ENV;

export const isDevelopment = () => getEnv() === 'development';
