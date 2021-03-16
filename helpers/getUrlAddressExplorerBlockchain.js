import getResourceInfoByOptions from './getResourceInfoByOptions';
import isERC20Tokens from './isERC20Tokens';

/**
 * Функция для получения Url`a с адресом транзакции
 *
 * @param alias {String} Псевдоним криптовалюты
 * @param address {String} Строка с адресом транзакции
 * @returns {String} Строка с адресом
 */
export default (alias, address) => {
  switch (alias) {
    case 'zec': {
      return `https://explorer.zcha.in/accounts/${address}`;
    }
    case 'etc': {
      return `https://blockscout.com/etc/mainnet/address/${address}`;
    }
    case 'xrp': {
      return `https://xrpscan.com/account/${address}`;
    }
    default: {
      // если erc20 токен валюта
      if (isERC20Tokens(alias)) {
        return `https://blockchair.com/ethereum/address/${address}`;
      }

      const aliasInfo = getResourceInfoByOptions(null, { searchKey: 'alias', searchValue: alias });
      return `https://blockchair.com/${aliasInfo.get('fullName', '').replace(/ /g, '-').toLowerCase()}/address/${address}`;
    }
  }
};
