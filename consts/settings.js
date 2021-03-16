import EmporiumIcon from 'assets/img/new-settings/emporium.svg';
import EmporiumIconGrey from 'assets/img/new-settings/emporium-grey.svg';
import EmporiumActiveIcon from 'assets/img/new-settings/emporium-active.svg';
import EmailIcon from 'assets/img/new-settings/email-dark-blue.svg';
import EmailIconGrey from 'assets/img/new-settings/email-grey.svg';
import EmailIconActive from 'assets/img/new-settings/email-active.svg';
// import SMSIcon from 'assets/img/new-settings/sms-dark-blue.svg';
// import SMSIconGrey from 'assets/img/new-settings/sms-grey.svg';
// import SMSIconActive from 'assets/img/new-settings/sms-active.svg';
// import TelegramIcon from 'assets/img/new-settings/telegram-dark-blue.svg';
// import TelegramIconGrey from 'assets/img/new-settings/telegram-grey.svg';
// import TelegramIconActive from 'assets/img/new-settings/telegram-active.svg';
// import ChromeIcon from 'assets/img/new-settings/chrome-dark-blue.svg';
// import ChromeIconGrey from 'assets/img/new-settings/chrome-grey.svg';
// import ChromeIconActive from 'assets/img/new-settings/chrome-active.svg';
// import FirefoxIcon from 'assets/img/new-settings/firefox-dark-blue.svg';
// import FirefoxIconGrey from 'assets/img/new-settings/firefox-grey.svg';
// import FirefoxIconActive from 'assets/img/new-settings/firefox-active.svg';
import NLoggedIcon from 'assets/img/new-settings/screen_n-logged.svg';
import NDealInProgressIcon from 'assets/img/new-settings/screen_n-deal-in-progress.svg';
import NNewMessageIcon from 'assets/img/new-settings/screen_n-new-message.svg';
import NRequestApplyIcon from 'assets/img/new-settings/screen_n-request-apply.svg';
import NRequestSentIcon from 'assets/img/new-settings/screen_n-request-sent.svg';
import NDealCanceledIcon from 'assets/img/new-settings/screen_n-deal-canceled.svg';
import NTimeIsUpIcon from 'assets/img/new-settings/screen_n-time-is-up.svg';
import NDealCompletedIcon from 'assets/img/new-settings/screen_n-deal-completed.svg';
import NDisputOpenIcon from 'assets/img/new-settings/screen_dispute-open.svg';
import NStarIcon from 'assets/img/new-settings/screen_review.svg';
import NWalletReplenishmentIcon from 'assets/img/new-settings/screen_n-wallet-withdrawal.svg';
import ChangeDealStatusIcon from 'assets/img/new-settings/screen_group-14-copy-27.svg';
// import NewSubscribeIcon from 'assets/img/new-settings/n-new-subsribe.svg';
// import AttachToActiveTopicsIcon from 'assets/img/new-settings/screen_n-forum-flame.svg';
// import MessageEvaluatingIcon from 'assets/img/new-settings/screen_n-rating-up.svg';
// import MessageAnswerIcon from 'assets/img/new-settings/screen_n-reply.svg';
// import NewMessageInTopicIcon from 'assets/img/new-settings/screen_n-new-post.svg';
import { siteName } from '../config';
// import FacebookMessenger from 'assets/img/new-settings/messenger-dark-blue.svg';
// import FacebookMessengerActive from 'assets/img/new-settings/messenger-active.svg';

const notificationResources = {
  emporium: 'app',
  email: 'email',
  // sms: 'phone',
  // telegram: 'telegram',
  // facebookMessenger: 'messenger',
  // // slack: 'slack',
  // chrome: 'chrome',
  // firefox: 'firefox',
};

const notificationResourcesArray = Object.values(notificationResources);

const services = {
  ...notificationResources,
  phone: 'phone',
  app: 'app',
};

const getFieldName = (prefix, fieldKey) => `${prefix}.${fieldKey}`;
const getRowHeadlineName = name => `${name}Headline`;

const modalTypes = {
  emailChangeModal: 'emailChange',
  confirmEmailChangeModal: 'confirmEmailChange',
  reserveEmailModal: 'reserveEmail',
  confirmReserveEmailModal: 'confirmReserveEmailModal',
  telegramManageModal: 'telegramManage',
  phoneManageModal: 'phoneManage',
  messengerManageModal: 'messengerManage',
  phoneDisconnectModal: 'phoneDisconnect',
  telegramDisconnectModal: 'telegramDisconnect',
  messengerDisconnectModal: 'messengerDisconnect',
  twoFAEnableModal: 'twoFAEnable',
  twoFADisableModal: 'twoFADisableModal',
  twoFAConfirmModal: 'twoFAConfirm',
  twoFACodesModal: 'twoFACodes',
  pinCodeEnableModal: 'pinCodeEnable',
  pinCodeDisableModal: 'pinCodeDisable',
  editPasswordModal: 'editPassword',
  controlQuestionsModal: 'controlQuestions',
  choose2faType: 'choose2faType',
  sendingFunds: 'sendingFunds',
  receiptFunds: 'receiptFunds',
};

const twoFaTypes = {
  twoFaTypeApp: 'app',
  twoFaTypeTelegram: 'telegram',
  twoFaTypeMessenger: 'messenger',
  twoFaTypePhone: 'phone',
};

const notificationColumns = (t, name) => ([
  {
    name: getFieldName(name, services.emporium),
    key: services.emporium,
    stdIcon: EmporiumIcon,
    stdIconMobile: EmporiumIconGrey,
    activeIcon: EmporiumActiveIcon,
    activeIconMobile: EmporiumActiveIcon,
    tooltip: t('HOME.SETTINGS.SERVICES.EMPORIUM', { siteName }),
  },
  {
    name: getFieldName(name, services.email),
    key: services.email,
    stdIcon: EmailIcon,
    stdIconMobile: EmailIconGrey,
    activeIcon: EmailIconActive,
    activeIconMobile: EmailIconActive,
  },
  // {
  //   name: getFieldName(name, services.sms),
  //   key: services.sms,
  //   stdIcon: SMSIcon,
  //   stdIconMobile: SMSIconGrey,
  //   activeIcon: SMSIconActive,
  //   activeIconMobile: SMSIconActive,
  //   tooltip: t('HOME.SETTINGS.SERVICES.SMS'),
  // },
  // {
  //   name: getFieldName(name, services.telegram),
  //   key: services.telegram,
  //   stdIcon: TelegramIcon,
  //   stdIconMobile: TelegramIconGrey,
  //   activeIcon: TelegramIconActive,
  //   activeIconMobile: TelegramIconActive,
  //   tooltip: t('HOME.SETTINGS.SERVICES.TELEGRAM'),
  // },
  //   {
  //   name: getFieldName(name, services.facebookMessenger),
  //   key: services.facebookMessenger,
  //   stdIcon: FacebookMessenger,
  //   activeIcon: FacebookMessengerActive,
  //   tooltip: t('HOME.SETTINGS.SERVICES.MESSENGER'),
  // },
  // {
  //   name: getFieldName(name, services.chrome),
  //   key: services.chrome,
  //   stdIcon: ChromeIcon,
  //   stdIconMobile: ChromeIconGrey,
  //   activeIcon: ChromeIconActive,
  //   activeIconMobile: ChromeIconActive,
  //   tooltip: t('HOME.SETTINGS.SERVICES.CHROME'),
  //   isDisabled: true,
  // }, {
  //   name: getFieldName(name, services.firefox),
  //   key: services.firefox,
  //   stdIcon: FirefoxIcon,
  //   stdIconMobile: FirefoxIconGrey,
  //   activeIcon: FirefoxIconActive,
  //   activeIconMobile: FirefoxIconActive,
  //   tooltip: t('HOME.SETTINGS.SERVICES.FIREFOX'),
  //   isDisabled: true,
  // },
]);

const notificationRows = t => ([
  {
    key: 'system',
    text: t('HOME.SETTINGS.SYSTEM'),
    items: [
      {
        key: 'inputInSystem',
        icon: NLoggedIcon,
        text: t('HOME.SETTINGS.REPORT_LOGIN'),
      },
    ],
  },
  {
    key: 'deals',
    text: t('HOME.SETTINGS.DEALS'),
    items: [
      {
        key: 'newSuggestions',
        icon: NLoggedIcon,
        text: t('HOME.SETTINGS.NEW_DEAL'),
      },
      {
        key: 'tradeRequestSent',
        icon: NRequestSentIcon,
        text: t('HOME.SETTINGS.DEAL_SENT'),
      },
      {
        key: 'tradeRequestAccepted',
        icon: NRequestApplyIcon,
        text: t('HOME.SETTINGS.DEAL_ACCEPT'),
      },
      {
        key: 'newMessages',
        icon: NNewMessageIcon,
        text: t('HOME.SETTINGS.NEW_MESSAGE'),
      },
      {
        key: 'dealInConfirmation',
        icon: NDealInProgressIcon,
        text: t('HOME.SETTINGS.DEAL_CONFIRMED'),
      },
      {
        key: 'dealCanceled',
        icon: NDealCanceledIcon,
        text: t('HOME.SETTINGS.CANCEL_DEAL'),
      },
      {
        key: 'dealTimeOut',
        icon: NTimeIsUpIcon,
        text: t('HOME.SETTINGS.TIME_EXPIRED'),
      },
      {
        key: 'dealCompleted',
        icon: NDealCompletedIcon,
        text: t('HOME.SETTINGS.DEAL_FINISHED'),
      },
      {
        key: 'disputeStatusChanged',
        icon: NDisputOpenIcon,
        text: t('HOME.SETTINGS.DEAL_DISPUTE'),
      },
      {
        key: 'newComment',
        icon: NStarIcon,
        text: t('HOME.SETTINGS.REVIEW'),
      },
    ],
  },
  {
    key: 'purse',
    text: t('HOME.SETTINGS.WALLETS'),
    items: [
      {
        key: 'walletRecharge',
        icon: NWalletReplenishmentIcon,
        text: t('HOME.SETTINGS.FILL_UP_WALLET'),
      },
      {
        key: 'walletChargeOff',
        icon: NWalletReplenishmentIcon,
        text: t('HOME.SETTINGS.WITHDRAW_WALLET'),
      },
    ],
  },
  {
    key: 'notice',
    text: t('HOME.SETTINGS.OFFERS'),
    items: [
      {
        key: 'offerActive',
        icon: ChangeDealStatusIcon,
        text: t('HOME.SETTINGS.OFFER_START'),
      },
      {
        key: 'offerPaused',
        icon: ChangeDealStatusIcon,
        text: t('HOME.SETTINGS.OFFER_PAUSE'),
      },
    ],
  },
  // {
  //   key: 'forum',
  //   text: t('HOME.SETTINGS.FORUM'),
  //   items: [
  //     {
  //       key: 'forumNewAnswerMessage',
  //       icon: MessageAnswerIcon,
  //       text: t('HOME.SETTINGS.ANSWER_TO_MESSAGE'),
  //     },
  //     {
  //       key: 'forumPostRated',
  //       icon: MessageEvaluatingIcon,
  //       text: t('HOME.SETTINGS.MESSAGE_APPRECIATING'),
  //     },
  //     {
  //       key: 'forumTopicActive',
  //       icon: AttachToActiveTopicsIcon,
  //       text: t('HOME.SETTINGS.PIN_TO_ACTUAL_TOPICS'),
  //     },
  //     {
  //       key: 'forumNewMessage',
  //       icon: NewMessageInTopicIcon,
  //       text: t('HOME.SETTINGS.NEW_MESSAGE_IN_TOPIC'),
  //     },
  //     {
  //       key: 'forumSubTopicMessage',
  //       icon: NewSubscribeIcon,
  //       text: t('HOME.SETTINGS.FORUM_SUBTOPIC_MESSAGE'),
  //     },
  //   ],
  // },
]);

export default {
  ...services,
  ...modalTypes,
  ...twoFaTypes,
  getFieldName,
  notificationRows,
  notificationColumns,
  notificationResourcesArray,
  notificationResources,
  getRowHeadlineName,
};
