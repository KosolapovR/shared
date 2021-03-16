import getResourceInfoByOptions from './getResourceInfoByOptions';
import isERC20Tokens from './isERC20Tokens';

/**
 * Функция для получения адреса с хешем покупателя
 *
 * @param alias {String} Псевдоним криптовалюты
 * @param hash {String} Хэш транзакции покупателя
 * @returns {String} Строка с хешем
 */
export default (alias, hash) => {
  switch (alias) {
    case 'zec': {
      return `https://explorer.zcha.in/transactions/${hash}`;
    }
    case 'etc': {
      return `https://blockscout.com/etc/mainnet/tx/${hash}`;
    }
    case 'xrp': {
      return `https://xrpscan.com/tx/${hash}`;
    }
    default: {
      // если erc20 токен валюта
      if (isERC20Tokens(alias)) {
        return `https://blockchair.com/ethereum/transaction/${hash}`;
      }

      const aliasInfo = getResourceInfoByOptions(null, { searchKey: 'alias', searchValue: alias });
      return `https://blockchair.com/${aliasInfo.get('fullName', '').replace(/ /g, '-').toLowerCase()}/transaction/${hash}`;
    }
  }
};
