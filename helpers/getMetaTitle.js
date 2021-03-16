/**
 * Функция для получения мета заголовка
 *
 * @param t {Function} Функция для получения текста по ключу
 * @param pathname {String} Путь к файлу которому нужен заголовок
 * @returns {String} Возвращается строка с заголовком
 */

export default (t, { pathname }) => {
  const paths = pathname.split('/');
  let title;
  switch (paths[1]) {
    case 'settings': {
      title = t('META_TITLES.SETTINGS');
      break;
    }
    case 'profile': {
      title = t('META_TITLES.PROFILE');
      break;
    }
    case 'wallets': {
      title = t('META_TITLES.WALLETS');
      break;
    }
    // case 'forum': {
    //   title = t('META_TITLES.FORUM');
    //   break;
    // }
    case 'deals': {
      title = t('META_TITLES.DEALS');
      break;
    }
    case 'exchange': {
      title = t('META_TITLES.EXCHANGE');
      break;
    }
    case 'dashboard': {
      title = t('META_TITLES.DASHBOARD');
      break;
    }
    case 'offers': {
      switch (paths[2]) {
        case 'create': {
          title = t('META_TITLES.CREATE_OFFERS');
          break;
        }
        default: {
          title = t('META_TITLES.OFFERS');
        }
      }
      break;
    }
    case 'news': {
      title = t('META_TITLES.NEWS');
      break;
    }
    case 'faq': {
      title = t('META_TITLES.FAQ');
      break;
    }
    default: {
      return process.env.SITE_NAME;
    }
  }
  return `${title} | ${process.env.SITE_NAME}`;
};
