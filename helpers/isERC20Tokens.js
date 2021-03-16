import { blockchain } from '../consts';

/**
* Функция, которая проверяет является ли криптовалюта erc20 token
*
* @param alias {String} - псевдоним криптовалюты
*
* @returns {Boolean} Булевое значение, true - если криптовалюта является erc20 token, иначе false
 */

export default alias =>
  blockchain.ERC20Tokens.some(item => item === alias);
