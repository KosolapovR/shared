import { getParams } from '../../helpers';

const base = '/';
const newsBase = '/news';
const faqBase = '/faq';
const forumBase = '/forum';
const settingsBase = '/settings';
const initialBase = '/initial';
const authBase = '/auth';
const sendBase = '/send';
const commissionBase = '/commission';
const dashboardBase = '/dashboard';
const profileBase = '/profile';
const offersBase = '/offers';
const dealsBase = '/deals';
const walletsBase = '/wallets';
const exchangeBase = '/exchange';
const error = '/error';
const banBase = '/ban';
const statsBase = '/rates';

export default {
  getNewsBase: () => newsBase,
  getNewsSearch: () => `${newsBase}/search`,
  getNewsPage: ({ page }) => `${newsBase}${getParams({ page })}`,
  getNewsPageWithParams: ({ currentPage, isInternal } = {}) => `${newsBase}${getParams({
    page: currentPage,
    isInternal,
  })}`,
  getNewsSearchPage: ({ value = ':value', page } = {}) =>
    `${newsBase}/search${getParams({
      q: value,
      page,
    })}`,
  getNewsSearchSinglePage: ({ searchingValue = ':value' } = {}) => `${newsBase}/search${getParams({
    q: searchingValue,
  })}`,
  getSingleNews: ({ id = ':id' } = {}) => `${newsBase}/${id}`,

  getFaqBase: () => faqBase,
  getFaqDispute: () => `${faqBase}/sdelki/chto-takoe-spor-v-sdelke`,
  getFaqCommission: () => `${faqBase}/servis-Site_name/chto-takoe-komissija-kriptovaljutnoj-seti`,
  getFaqCommissionService: () => `${faqBase}/servis-Site_name/komissija-servisa-Site_name`,
  getFaqCommissionERC20: () => `${faqBase}/koshelki/chto-takoe-1-pri-popolnenii-koshelka-erc20`,
  getFaqWallets: ({ article = '' } = {}) => `${faqBase}/koshelki/${article || ''}`,
  getFaqSafety: () => `${faqBase}/bezopasnost`,
  getFaqSearch: () => `${faqBase}/search`,
  getFaqSearchResults: ({ searchingValue = ':value' } = {}) => `${faqBase}/search${getParams({
    value: searchingValue,
  })}`,
  getFaqTopics: ({ topicId = ':topicId' } = {}) => `${faqBase}/${topicId}`,
  getFaqTopicsArticle: ({ topicId = ':topicId', articleId = ':articleId' } = {}) => `${faqBase}/${topicId}/${articleId}`,
  getFaqAboutEmpo: () => `${faqBase}/servis-Site_name/chto-takoe-platforma-Site_name`,
  getFaqMoreQuestions: () => `${faqBase}/servis-Site_name/tehpodderzhka-Site_name`,
  getInternalNews: () => `${newsBase}?isInternal=true`,
  getFaqTechnicalSupport: () => `${faqBase}/servis-Site_name/tehpodderzhka-Site_name`,
  getFaqTermsService: () => `${faqBase}/servis-Site_name/uslovija-okazanija-uslug`,
  getFaqTermsUse: () => `${faqBase}/servis-Site_name/pravila-polzovanija`,
  getFaqSecurity: () => `${faqBase}/bezopasnost/pochemu-ja-dolzhen-otdavat-vam-privatnyj-kljuch`,
  getFaqReport: () => `${faqBase}/servis-Site_name/tehpodderzhka-Site_name`,
  getFaqOffer: () => `${faqBase}/servis-Site_name/tehpodderzhka-Site_name`,
  // getFaqReport: () => `${faqBase}/servis-Site_name/kak-svjazatsja-
  // s-Site_name-esli-ostalis-voprosy`,
  // getFaqOffer: () => `${faqBase}/servis-Site_name/est-predlozhenie`,
  getFaqOfferRun: () => `${faqBase}/obmen/kak-zapustit-objavlenie`,

  getForumBase: () => forumBase,
  getForumSearch: () => `${forumBase}/search`,
  getForumSearchSinglePage: ({ searchingValue = ':value' } = {}) => `${forumBase}/search${getParams({
    q: searchingValue,
  })}`,
  getForumUserMessage: ({ id = ':id' } = {}) => `${forumBase}/user/messages/${id}`,

  getSettingsBase: () => settingsBase,
  getAccountSettings: () => `${settingsBase}/account`,
  getSafetySettings: () => `${settingsBase}/safety`,
  getNotificationsSettings: () => `${settingsBase}/notifications`,
  getActionsLog: () => `${settingsBase}/action-log`,
  getSessionsHistory: () => `${settingsBase}/sessions-history`,
  getForumSubscriptions: () => `${forumBase}/topics/subscriptions`,
  getForumTopicCreate: ({ id = ':id' } = {}) => `${forumBase}/topic/create/${id}`,
  getForumBoard: ({ id = ':id' } = {}) => `${forumBase}/board/${id}`,
  getForumTopic: ({ topicId = ':id', messageId, page } = {}) =>
    `${forumBase}/topic/${topicId}${messageId ? `#${messageId}` : ''}${getParams({ page })}`,
  getForumTopicMessage: ({ id = ':id' } = {}) => `${forumBase}/topic/message/${id}`,
  getForumTopicMessageEdit: ({ id = ':id' } = {}) => `${forumBase}/topic/message/${id}/edit`,
  getForumTopicEdit: ({ id = ':id' } = {}) => `${forumBase}/topic/${id}/edit`,

  getInitialBase: () => initialBase,
  getInitialSettings: () => `${initialBase}/settings`,

  getBase: () => base,
  getConfirmReserveEmail: () => '/reserve',

  getAuthBase: () => authBase,
  getAuthAdvantages: () => `${authBase}/advantages`,
  getAuthSuccess: () => `${authBase}/success`,
  getAuthRecoveryCodes: () => `${authBase}/recovery-codes`,
  getAuthConnect2fa: () => `${authBase}/connect-2fa`,
  getAuthConnect2faRecoveryCodes: () => `${authBase}/connect-2fa/recovery-codes`,
  getAuthConnection2fa: () => `${authBase}/connection-2fa`,
  getAuthRegistration: () => `${authBase}/registration`,
  getAuthRecovery: () => `${authBase}/recovery`,
  getAuthRecoveryConfirm: () => `${authBase}/recovery/confirm`,
  getAuthRecovery2faConfirm: () => `${authBase}/recovery/2fa/confirm`,
  getAuthRecoverySuccess: () => `${authBase}/recovery/success`,
  getAuthLogin2fa: () => `${authBase}/login-2fa`,
  getAuthLogin2faCode: () => `${authBase}/login-2fa-code`,

  getCommissionBase: () => commissionBase,
  getDashboardBase: () => dashboardBase,

  getDealsBase: () => dealsBase,
  getSingleDeal: ({ dealId = ':dealId' } = {}) => `${dealsBase}/${dealId}`,
  getDealCreate: ({ offerId = ':offerId' } = {}) => `${dealsBase}/create/${offerId}`,

  getExchangeBase: () => exchangeBase,
  getSelectedOffer: ({
    currencyFromValue,
    walletSendAliasValue,
    currencyToValue,
    walletReceiveAliasValue,
  } = {}) => `${exchangeBase}${getParams({
    cfv: currencyFromValue,
    wsav: walletSendAliasValue,
    ctv: currencyToValue,
    wrav: walletReceiveAliasValue,
  })}`,

  getExchangeSubscriptions: () => `${exchangeBase}/subscriptions`,

  getOffersBase: () => offersBase,
  getOffersCreate: () => `${offersBase}/create`,
  getOffersExchange: () => `${offersBase}/exchange`,
  getOffer: ({ id = ':id' } = {}) => `${offersBase}/edit/${id}`,

  getWalletsBase: () => walletsBase,
  getWallet: ({ walletId = ':walletId' } = {}) => `${walletsBase}/${walletId}`,
  getWalletsCurrency: ({ currency = ':currency' } = {}) => `${walletsBase}/${currency}`,
  getWalletType: ({ type = ':type' } = {}) => `${walletsBase}/${type}`,

  getProfileBase: () => profileBase,
  getProfileUsername: ({ username = ':username' } = {}) => `${profileBase}/${username}`,

  getSendId: ({ id = ':id' } = {}) => `${sendBase}/${id}`,
  getLink: ({ link = ':link' } = {}) => `/${link}`,

  getError: () => error,
  getBan: () => banBase,

  getStatsBase: () => statsBase,
};
