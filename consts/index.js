// import iconLogIn from 'assets/img/log-in.svg';
// import iconEnvelope from 'assets/img/envelope.svg';
// import iconConnection2fa from 'assets/img/connection-2fa.svg';
// import iconConnect2fa from 'assets/img/connect-2fa.svg';
// import iconRegistration from 'assets/img/registration.svg';
// import iconRecovery from 'assets/img/recovery.svg';
// import iconLogin2fa from 'assets/img/login-2fa.svg';
// import iconRecoverySuccess from 'assets/img/recovery-success.svg';
//
// import internalWalletIcon from 'assets/img/logo/logo.svg';
// import importWalletIcon from 'assets/img/w-import.svg';
// import msigWalletIcon from 'assets/img/w-msig-dark.svg';
//
// import benefitsIcon1 from 'assets/img/benefits/benefits1.svg';
// import benefitsIcon2 from 'assets/img/benefits/benefits2.svg';
// import benefitsIcon3 from 'assets/img/benefits/benefits3.svg';
// import benefitsIcon4 from 'assets/img/benefits/benefits4.svg';
// import benefitsIcon5 from 'assets/img/benefits/benefits5.svg';
// import benefitsIcon6 from 'assets/img/benefits/benefits6.svg';
// import benefitsIcon9 from 'assets/img/qiwi-yandex.svg';
// import benefitsIllustration2 from 'assets/img/benefits/benefits-2.svg';
// import benefitsIllustration3 from 'assets/img/benefits/benefits-3.svg';
// import benefitsIllustration4 from 'assets/img/benefits/benefits-4.svg';
// import benefitsIllustration5 from 'assets/img/benefits/benefits-5.svg';
// import benefitsIllustration6 from 'assets/img/benefits/benefits-6.svg';
// import security1 from 'assets/img/security/security1.svg';
// import security2 from 'assets/img/security/security2.svg';
// import security3 from 'assets/img/security/security3.svg';
// import security4 from 'assets/img/security/security4.svg';
// import security5 from 'assets/img/security/security5.svg';
// import security6 from 'assets/img/security/security6.svg';
// import smsIcon from 'assets/img/sms.svg';
// import fa2Icon from 'assets/img/2fa.svg';
// import fa2IconMobile from 'assets/img/2fa-mobile.svg';
// import fa2ActiveIcon from 'assets/img/2fa-active.svg';
// import SMSIconActive from 'assets/img/new-settings/sms-active.svg';
// import TelegramIcon from 'assets/img/new-settings/telegram.svg';
// import TelegramIconActive from 'assets/img/new-settings/telegram-active.svg';
// import FacebookMessenger from 'assets/img/new-settings/messenger.svg';
// import FacebookMessengerActive from 'assets/img/new-settings/messenger-active.svg';
// import { siteName } from 'config';
import blockchain from './blockchain';
import countries from './countries';
// import languages from './languages';
import apiConstants from './apiConstants';
// import routes from './routes';
import * as DEALS from './deals';
// import settingsConstants from './settings';
import landingCountryLimits from './landingCountryLimits';
// import tipsPreview from './tipsPreview';
import allLanguages from './allLanguages';
import * as notificationTypes from './notificationTypes';
// import * as menuItems from './menuItems';
// import footerItems from './footerItems';
import errorMessages from './errorMessages';
import errorCodes from './errorCodes';
import { FIAT_DIGITS } from './digits';
import * as inputPatterns from './inputPatterns';

export {
  blockchain,
  countries,
  // languages,
  apiConstants,
  // routes,
  DEALS,
  FIAT_DIGITS,
  landingCountryLimits,
  // settingsConstants,
  // tipsPreview,
  allLanguages,
  notificationTypes,
  // footerItems,
  // menuItems,
  errorMessages,
  errorCodes,
  inputPatterns,
};

// export const AUTH_ICONS = {
//   '/auth': iconLogIn,
//   '/auth/success': iconEnvelope,
//   '/auth/connection-2fa': iconConnection2fa,
//   '/auth/registration': iconRegistration,
//   '/auth/recovery': iconRecovery,
//   '/auth/recovery/confirm': iconRecovery,
//   '/auth/recovery/2fa/confirm': iconRecovery,
//   '/auth/connect-2fa': iconConnect2fa,
//   '/auth/recovery-codes': iconConnect2fa,
//   '/auth/login-2fa': iconLogin2fa,
//   '/auth/login-2fa-code': iconLogin2fa,
//   '/auth/recovery/success': iconRecoverySuccess,
// };

export const PAYMENT_TYPE = t => [
  {
    icon: '',
    id: 'crypto',
    title: t('HOME.PAGE_OFFER.UI_STEPS.STEP_2.PAYMENT_TYPE.CPYPTO'),
  },
  {
    icon: '',
    id: 'bank',
    title: t('HOME.PAGE_OFFER.UI_STEPS.STEP_2.PAYMENT_TYPE.BANK'),
  },
  {
    icon: '',
    id: 'payment',
    title: t('HOME.PAGE_OFFER.UI_STEPS.STEP_2.PAYMENT_TYPE.PAYMENT_SYSTEM'),
  },
];

export const ERRORS = t => ({
  'bad username': t('ERRORS.INVALID_EMAIL_OR_PASSWORD'),
  'bad email': t('ERRORS.EMAIL_NOT_EXIST'),
  'invalid user id': t('API_ERRORS.INVALID_USER'),
});

export const DEAL_STATUSES = {
  // новые
  PRE_INITIALIZED: 'pre-initialized',
  INITIALIZED: 'initialized',
  INITIALIZED_MINING: 'initialized-mining',
  // активные
  CREATED_MINING: 'created-mining',
  MINING: 'mining',
  CREATED: 'created',
  WAITING_CONFIRM: 'waiting-confirm',
  WAITING_PARTNER_CONFIRM: 'waiting-partner-confirm',
  DISPUTE_START: 'dispute-start',
  DISPUTE_END: 'dispute-end',
  // завершенные
  CANCELED: 'canceled',
  UNRATED: 'unrated',
  RATED: 'rated',
  OUTDATED: 'outdated',
  REJECTED: 'rejected',
};

export const DEAL_TYPES = {
  CRYPTO: 'crypto',
  BANK: 'bank',
  PAYMENT: 'payment',
  FIAT: 'fiat',
};

export const WEBSOCKET_EVENT_TYPES = {
  NOTIFICATION: 'notification',
  MODEL_CHANGE: 'model-change',
  PAGE_COUNT_UPDATE: 'currentPageUpdate',
  FORUM_OBJECT_UPDATE: 'forumObjectUpdate',
  FORUM_CHILD_UPDATE: 'forumChildUpdate',
};

export const MODEL_CHANGE_TYPES = {
  DEAL: 'deal',
  WALLET: 'wallet',
  BLOCK_HEIGHT: 'blockHeight',
  TRANSACTION: 'transaction',
};

// export const EXCHANGE_SPEED = (t, cryptocurrenciesAmount) => [
//   {
//     icon: benefitsIcon1,
//     caption: t('LANDING.BENEFITS.EXCHANGE_RATES_CAPTION'),
//     subcaption: t('LANDING.BENEFITS.EXCHANGE_RATES_SUBCAPTION', { siteName }),
//   },
//   {
//     icon: benefitsIcon2,
//     caption: t('LANDING.BENEFITS.EXCHANGES_CAPTION'),
//     subcaption: t('LANDING.BENEFITS.EXCHANGES_SUBCAPTION'),
//   },
//   {
//     icon: benefitsIcon3,
//     caption:
//       cryptocurrenciesAmount > 4
//         ? t('LANDING.CRYPTO_CURRENCIES.DESCRIPTION', { amount: cryptocurrenciesAmount })
//         : t('LANDING.CRYPTO_CURRENCIES.DESCRIPTION_1', { amount: cryptocurrenciesAmount }),
//     subcaption: t('LANDING.BENEFITS.CRYPTOCURRENCIES_SUBCAPTION'),
//   },
//
//   // TODO временное скрытие функционала
//
//   // {
//   //   icon: benefitsIcon9,
//   //   caption: t('LANDING.BENEFITS.QIWI_YANDEX'),
//   //   subcaption: t('LANDING.BENEFITS.QIWI_YANDEX_SUBCAPTION'),
//   // },
// ];

// export const SECURITY = t => [
//   // TODO временное скрытие функционала
//
//   // {
//   //   caption: t('LANDING.SECURITY.CARD_CAPTION_1'),
//   //   subcaption: t('LANDING.SECURITY.CARD_SUBCAPTION_1'),
//   //   icon: security1,
//   // },
//   {
//     caption: t('LANDING.SECURITY.CARD_CAPTION_2'),
//     subcaption: t('LANDING.SECURITY.CARD_SUBCAPTION_2'),
//     icon: security2,
//   },
//   {
//     caption: t('LANDING.SECURITY.CARD_CAPTION_3'),
//     subcaption: t('LANDING.SECURITY.CARD_SUBCAPTION_3'),
//     icon: security3,
//   },
//   {
//     caption: t('LANDING.SECURITY.CARD_CAPTION_4'),
//     subcaption: t('LANDING.SECURITY.CARD_SUBCAPTION_4'),
//     icon: security4,
//   },
//   // {
//   //   caption: t('LANDING.SECURITY.CARD_CAPTION_5'),
//   //   subcaption: t('LANDING.SECURITY.CARD_SUBCAPTION_5', { siteName }),
//   //   icon: security5,
//   //   buttonText: t('LANDING.SECURITY.CARD_BUTTON_5'),
//   //   href: '/forum',
//   // },
//   {
//     caption: t('LANDING.SECURITY.CARD_CAPTION_6'),
//     subcaption: t('LANDING.SECURITY.CARD_SUBCAPTION_6'),
//     icon: security6,
//     buttonText: t('LANDING.SECURITY.CARD_BUTTON_6'),
//     href: '/faq',
//   },
// ];

// export const BENEFITS = t => [
//   {
//     icon: benefitsIcon2,
//     caption: t('LANDING.BENEFITS.EXCHANGES_CAPTION'),
//     subcaption: t('LANDING.BENEFITS.EXCHANGES_SUBCAPTION'),
//     illustration: benefitsIllustration2,
//   },
//   {
//     icon: benefitsIcon3,
//     caption: t('LANDING.BENEFITS.CRYPTOCURRENCIES'),
//     illustration: benefitsIllustration3,
//   },
//   {
//     icon: benefitsIcon4,
//     caption: t('LANDING.BENEFITS.BROWSER_CAPTION'),
//     subcaption: t('LANDING.BENEFITS.BROWSER_SUBCAPTION'),
//     illustration: benefitsIllustration4,
//   },
//   {
//     icon: benefitsIcon5,
//     caption: t('LANDING.BENEFITS.ENCRYPTION_CAPTION'),
//     subcaption: t('LANDING.BENEFITS.ENCRYPTION_SUBCAPTION'),
//     illustration: benefitsIllustration5,
//   },
//   {
//     icon: benefitsIcon6,
//     caption: t('LANDING.BENEFITS.MULTISIG_CAPTION', { siteName }),
//     subcaption: t('LANDING.BENEFITS.MULTISIG_SUBCAPTION'),
//     illustration: benefitsIllustration6,
//   },
// ];

export const COMMISSION_TYPES = t => [
  {
    id: 'input',
    title: t('HOME.PAGE_COMMISSION.TOPUP'),
  },
  {
    id: 'withdraw',
    title: t('HOME.PAGE_COMMISSION.WITHDRAW'),
  },
  {
    id: 'fiat-crypto',
    title: t('HOME.PAGE_COMMISSION.CRYPTO_FIAT'),
  },
  {
    id: 'crypto-crypto',
    title: t('HOME.PAGE_COMMISSION.CRYPTO_CRYPTO'),
  },
];

export const STEPS = t => [
  t('FIRST_SETTINGS.STEPS_WRAPPER.STEPS.STEP_1'),
  t('FIRST_SETTINGS.STEPS_WRAPPER.STEPS.STEP_2'),
  t('FIRST_SETTINGS.STEPS_WRAPPER.STEPS.STEP_3'),
  t('FIRST_SETTINGS.STEPS_WRAPPER.STEPS.STEP_4'),
  t('FIRST_SETTINGS.STEPS_WRAPPER.STEPS.STEP_5'),
];


export const QIWI_ID = '5c769b429d43b5f551c7a11a';
export const YANDEX_ID = '5c769c2d9d43b5f551c7a120';

export const SUB_DURATIONS = t => [
  {
    id: 1,
    title: t('HOME.PAGE_MARKET.SUBSCRIBE_MODAL.1_MONTH'),
  },
  {
    id: 2,
    title: t('HOME.PAGE_MARKET.SUBSCRIBE_MODAL.2_MONTH'),
  },
  {
    id: 3,
    title: t('HOME.PAGE_MARKET.SUBSCRIBE_MODAL.3_MONTH'),
  },
];


// export const SECURE_TYPES = (t, isMobile) => [
//   {
//     icon: isMobile ? fa2IconMobile : fa2Icon,
//     activeIcon: fa2ActiveIcon,
//     service: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.2FA_TITLE'),
//     method: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.2FA_SUBTITLE'),
//     id: 'app',
//     disabled: false,
//   },
//   // {
//   //   icon: smsIcon,
//   //   activeIcon: SMSIconActive,
//   //   service: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.MOBILE_TITLE'),
//   //   method: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.MOBILE_SUBTITLE'),
//   //   id: 'phone',
//   //   disabled: false,
//   // },
//   {
//     icon: TelegramIcon,
//     activeIcon: TelegramIconActive,
//     service: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.TELEGRAM_TITLE'),
//     method: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.TELEGRAM_SUBTITLE'),
//     id: 'telegram',
//     disabled: true,
//   },
//   // {
//   //   icon: FacebookMessenger,
//   //   activeIcon: FacebookMessengerActive,
//   //   service: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.MESSENGER_TITLE'),
//   //   method: t('FIRST_SETTINGS.SETTING_2FA_STEP.METHODS.MESSENGER_SUBTITLE'),
//   //   id: 'messenger',
//   //   disabled: true,
//   // },
// ];

export const TYPE_TRANSACTION = {
  TRANSFER_FROM: 'transfer-from',
  TRANSFER_TO: 'transfer-to',
};

export const DEFAULT_CRYPTO = ['btc', 'eth'];
export const DEFAULT_FIAT = 'RUB';

export const STEPS_KEYS = {
  welcome: 'welcome',
  first: 'location',
  second: 'notifications',
  third: 'priorityCurrencies',
  fourth: 'twoFa',
  fifth: 'favoritesCurrencies',
  finished: 'finished',
  completed: 'completed',
};

export const PRO_MODE_KEY = 'marketProMode';

// export const WALLET_ICONS = {
//   internal: internalWalletIcon,
//   msig: msigWalletIcon,
//   imported: importWalletIcon,
// };

export const PROFIT_LIMITS = {
  SWAPPED: 'swapped',
  STRAIGHT: 'straight',
};

export const MOBILE_WIDTH = 529;
export const SMALL_MOBILE_WIDTH = 360;
