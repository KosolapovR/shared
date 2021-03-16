/**
* Функция, для определения типа карты(visa, master card и т.д) по её номеру
*
* @param {String} number - номер карты
*
* @returns {String} Картинка типа карты(visa, master card и т.д)
 */

import americanExpressIcon from '../assets/img/types-bank-card/american-express.svg';
import mastercardIcon from '../assets/img/types-bank-card/mastercard.svg';
import mirIcon from '../assets/img/types-bank-card/mir.svg';
import visaIcon from '../assets/img/types-bank-card/visa.svg';

export default (number) => {
  let icon;
  switch (number[0]) {
    case '2': {
      // мир
      icon = mirIcon;
      break;
    }
    case '3': {
      // American Express
      icon = americanExpressIcon;
      break;
    }
    case '4': {
      // visa
      icon = visaIcon;
      break;
    }
    case '5': {
      // MasterCard
      icon = mastercardIcon;
      break;
    }
    default: {
      // другие
      icon = mastercardIcon;
    }
  }
  return icon;
};
