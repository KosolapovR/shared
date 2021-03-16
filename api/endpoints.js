import { getParams, getUserParams } from '../helpers';
//
// const hostUsers = `${process.env.SERVICE_USERS}`;
// const hostPayment = `${process.env.SERVICE_PAYMENT}`;
// const hostMarket = `${process.env.SERVICE_MARKET}`;
// const hostBuffer = `${process.env.SERVICE_BUFFER}`;
// const hostDeals = `${process.env.SERVICE_DEALS}`;
// const hostCrypto = `${process.env.SERVICE_CRYPTO}`;
// const hostChat = `${process.env.SERVICE_CHAT}`;
// const hostForum = `${process.env.SERVICE_FORUM}`;
// const hostStats = `${process.env.SERVICE_STAT}`;
// const hostBuckets = `${process.env.SERVICE_BUCKETS}`;
//
// const hostSocketUsers = `${process.env.WS_SERVICE_USERS}`;
// const hostSocketChat = `${process.env.WS_SERVICE_CHAT}`;
//
// const hostTranslations = `${process.env.HOST_TRANSLATIONS}`;
const hostUsers = 'http://proxy.ton.services/service-users';
const hostPayment = 'http://proxy.ton.services/service-payment';
const hostMarket = 'http://proxy.ton.services/service-market';
const hostBuffer = 'http://proxy.ton.services/service-buffer';
const hostDeals = 'http://proxy.ton.services/service-deals';
const hostCrypto = 'http://proxy.ton.services/service-payment/proxy';
const hostChat = 'http://proxy.ton.services/service-chat';
const hostForum = 'http://proxy.ton.services/service-forum';
const hostStats = 'http://proxy.ton.services/service-stat';
const hostBuckets = 'http://proxy.ton.services/service-buckets';

const hostSocketUsers = 'ws://proxy.ton.services/service-users';
const hostSocketChat = 'ws://proxy.ton.services/service-chat';

const hostTranslations = 'http://proxy.ton.services/service-translate';

export default {
  getLoginUrl: () => `${hostUsers}/auth`,
  getConfirmUrl: () => `${hostUsers}/user/confirm`,
  get2faCodesUrl: () => `${hostUsers}/2fa/codes`,
  get2faKeyUrl: () => `${hostUsers}/2fa/key/app`,
  get2faCodeUrl: ({ type = '' } = {}) => `${hostUsers}/2fa/key/${type}`,
  get2faEnableUrl: () => `${hostUsers}/2fa`,
  get2faDisableUrl: () => `${hostUsers}/2fa/disable`,
  getLogin2faUrl: () => `${hostUsers}/auth/2fa`,
  getEmailChangeUrl: () => `${hostUsers}/auth/email/change`,
  getConfirmEmailUrl: (body = {}) => `${hostUsers}/auth/email/confirm${getParams(body)}`,
  getPasswordChangeUrl: () => `${hostUsers}/auth/password/change`,
  getPasswordRecoveryUrl: (body = {}) => `${hostUsers}/user/recovery${getParams(body)}`,
  getPasswordRecovery2faUrl: () => `${hostUsers}/user/recovery/2fa`,
  getCheckEmailUrl: (body = {}) => `${hostUsers}/user/check/email${getParams(body)}`,
  getCheckUsernameUrl: (body = {}) => `${hostUsers}/user/check/username${getParams(body)}`,
  getUserUrl: () => `${hostUsers}/user`,
  getCheckPinUrl: (body = {}) => `${hostUsers}/user/pincode/check${getParams(body)}`,
  getSessionsUrl: () => `${hostUsers}/user/sessions`,
  getSessionUrl: () => `${hostUsers}/user/session`,
  getPutUserProfileUrl: () => `${hostUsers}/user/profile`,
  getPutUserInfoSettingsUrl: () => `${hostUsers}/user/info/settings`,
  getUserInfoUrl: (body = {}) => `${hostUsers}/info${getParams(body)}`,
  getPublicUserProfileUrl: (body = {}) => `${hostUsers}/user${getUserParams(body)}`,
  getCommentsUrl: (body = {}) => `${hostUsers}/user/comments${getParams(body)}`,
  getCommentReplyUrl: () => `${hostUsers}/user/comment/reply`,
  getLogOutUrl: () => `${hostUsers}/logout`,
  getNotificationsUrl: (body = {}) => `${hostUsers}/notifications${getParams(body)}`,
  getReadNotificationsUrl: () => `${hostUsers}/notifications/readall`,
  getTermsUrl: () => `${hostUsers}/terms/all`,
  getAcceptTermsUrl: () => `${hostUsers}/user/terms`,
  getUsersOnlineUrl: () => `${hostUsers}/stats/online`,
  getTranslatesUrl: lang => `${hostUsers}/translation/${lang}`,
  getResendEmailUrl: (body = {}) => `${hostUsers}/auth/email/resend${getParams(body)}`,
  getChangeUserLanguage: () => `${hostUsers}/user/language`,
  getChangeStep: () => `${hostUsers}/user/initial/step`,
  // получения инфы о местоположении пользователя
  getUserLocationUrl: () => `${hostUsers}/ipinfo`,

  // кошельки
  getWalletsUrl: (body = {}) => `${hostPayment}/wallet${getParams(body)}`,
  getCreateNewMsigWalletUrl: () => `${hostPayment}/wallet/msig`,
  getInternalWalletUrl: () => `${hostPayment}/wallet/internal`,
  getInternalWalletAllUrl: () => `${hostPayment}/wallet/internal/all`,
  getInternalWalletForceUrl: () => `${hostPayment}/wallet/internal/force`,
  getImportedWalletUrl: () => `${hostPayment}/wallet/imported`,
  getWalletByIdUrl: id => `${hostPayment}/wallet/${id}`,
  getSendMoneyFromInternalUrl: id => `${hostPayment}/wallet/internal/${id}/withdraw`,
  getSendMoneyFromMsigUrl: id => `${hostPayment}/wallet/msig/${id}/withdraw`,
  getBankCardUrl: () => `${hostPayment}/card`,
  getBankCardByIdUrl: id => `${hostPayment}/card/${id}`,
  getAccountPaymentSystemsUrl: (body = {}) => `${hostPayment}/ps/account${getParams(body)}`,
  getAccountPaymentSystemByIdUrl: id => `${hostPayment}/ps/account/${id}`,
  getWalletValidateUrl: (body = {}) => `${hostPayment}/wallet/imported/validate${getParams(body)}`,
  getCurrencyCommissionUrl: (alias, body = {}) => `${hostPayment}/commission/symbol/${alias}${getParams(body)}`,


  // resource
  getCryptocurrenciesUrl: () => `${hostPayment}/crypto`,
  getBanksUrl: (body = {}) => `${hostPayment}/bank${getParams(body)}`,
  getPaymentSystemsUrl: () => `${hostPayment}/ps`,
  getCryptocurrenciesCommissionsUrl: () => `${hostPayment}/crypto/meta`,
  getCryptoBlockHeightUrl: () => `${hostPayment}/crypto/block-height`,

  // переводы средств с кошельков
  getRechargeRequestUrl: () => `${hostPayment}/wallet/recharge-request`,
  getRechargeRequestByIdUrl: id => `${hostPayment}/wallet/recharge-request/${id}`,

  // оферы
  getOffersUrl: (body = {}) => `${hostMarket}/offers/user${getParams(body)}`,
  getTickersUrl: (body = {}) => `${hostBuffer}/rate/exchanges${getParams(body)}`,
  getCreateOfferUrl: () => `${hostMarket}/offer`,
  getOfferByIdUrl: id => `${hostMarket}/offer/${id}`,
  getToggleOfferUrl: (id, method) => `${hostMarket}/offer/${id}/${method}`,

  // маркет
  getMarketUrl: (body = {}) => `${hostMarket}/offers${getParams(body)}`,
  getMostPopularPairUrl: () => `${hostMarket}/direction/popular`,
  getMarketPairsUrl: () => `${hostMarket}/direction/info`,
  getEmpoExchangeRateUrl: (body = {}) => `${hostMarket}/minoffer${getParams(body)}`,
  getProfitLimitsUrl: () => `${hostMarket}/limit`,

  // подписки
  getSubscribeUrl: () => `${hostMarket}/subscriptions`,
  getSubscriptionsUrl: () => `${hostMarket}/subscription`,
  getSubcribeByIdUrl: id => `${hostMarket}/subscription/${id}`,

  getCurrencyCoursesUrl: (quotedCurrency, body = {}) => `${hostBuffer}/rate/quote/${quotedCurrency}${getParams(body)}`,

  getCreateWalletUrl: () => `${hostCrypto}/wallet`,
  getSignMsigTxUrl: () => `${hostCrypto}/usersign/`,
  getCreateTxUrl: () => `${hostCrypto}/tx/msig`,
  getFeeUrl: (body = {}) => `${hostCrypto}/fee${getParams(body)}`,

  // сделки
  getDealsUrl: (body = {}) => `${hostDeals}/deals${getParams(body)}`,
  getDealUrl: () => `${hostDeals}/deal`,
  getDealByIdUrl: id => `${hostDeals}/deal/${id}`,
  getConfirmDealUrl: id => `${hostDeals}/deal/${id}/confirm`,
  getSubmitSendingUrl: id => `${hostDeals}/deal/${id}/sending/submit`,
  getSubmitReceivingUrl: id => `${hostDeals}/deal/${id}/receiving/submit`,
  getSubmitSignTransactionUrl: id => `${hostDeals}/deal/${id}/transaction/submit`,
  getRateDealUrl: id => `${hostDeals}/deal/${id}/rate`,
  getCancelDealUrl: id => `${hostDeals}/deal/${id}/cancel`,

  // чаты
  getInviteAdminUrl: id => `${hostDeals}/deal/${id}/admin/invite`,
  getMessageUrl: () => `${hostChat}/message`,
  getMessagesUrl: id => `${hostChat}/message/${id}`,
  getAesKeyUrl: (body = {}) => `${hostChat}/channel/aes${getParams(body)}`,

  getExchangeRateBySymbolUrl: (body = {}) => `${hostBuffer}/rate/exchanges${getParams(body)}`,

  getSocketsUrl: (body = {}) => `${hostSocketUsers}/subscribe${getParams(body)}`,
  getChatSocketUrl: (body = {}) => `${hostSocketChat}/ws/join${getParams(body)}`,

  getMarketPeopleCountUrl: () => `${hostUsers}/online`,

  // FAQ
  getFaqTopicsUrl: () => `${hostForum}/faq`,
  getArticleUrl: id => `${hostForum}/faq/articles/${id}`,
  getFaqSearchUrl: (body = {}) => `${hostForum}/faq/search${getParams(body)}`,

  // форум
  getBoardsUrl: (body = {}) => `${hostForum}/boards${getParams(body)}`,
  getBoardUrl: (id, body = {}) => `${hostForum}/boards/${id}${getParams(body)}`,
  getTopicByIdUrl: (id, body = {}) => `${hostForum}/topics/${id}${getParams(body)}`,
  getSubscriptionUrl: (body = {}) => `${hostForum}/subs${getParams(body)}`,
  getSubscriptionMarkAllAsReadUrl: () => `${hostForum}/subs/read`,
  getTopicUrl: () => `${hostForum}/topics`,
  getActiveTopicsUrl: () => `${hostForum}/topics/active`,
  getMessagesTopicUrl: () => `${hostForum}/messages`,
  getVotesUrl: id => `${hostForum}/messages/${id}/votes`,
  getBoardsTopicAvailableUrl: () => `${hostForum}/boards/topic-available`,
  getTopicsSearchUrl: (body = {}) => `${hostForum}/topics/search${getParams(body)}`,
  getMessagesSearchUrl: (body = {}) => `${hostForum}/messages/search${getParams(body)}`,
  getMessageByIdUrl: id => `${hostForum}/messages/${id}`,
  getStatisticUrl: () => `${hostForum}/statistic`,
  getStatisticUserUrl: id => `${hostForum}/statistic/users/${id}`,
  getForumUserMessages: (id, query = {}) => `${hostForum}/messages/users/${id}${getParams(query)}`,
  getSubsCountUrl: () => `${hostForum}/subs/count`,

  // новости
  getNewsUrl: (body = { sortBy: 'createdAt' }) => `${hostForum}/news${getParams(body)}`,
  getSingleNewsUrl: id => `${hostForum}/news/${id}`,
  getNewsCommentsUrl: id => `${hostForum}/news/${id}/comments`,
  getNewsSearchUrl: (body = {}) => `${hostForum}/news/search${getParams(body)}`,
  getStoriesUrl: (body = {}) => `${hostForum}/news/stories${getParams(body)}`,
  getMarkStoryAsViewedUrl: id => `${hostForum}/news/stories/${id}/mark-view`,

  // common
  getExchangesListUrl: (body = {}) => `${hostPayment}/exchange${getParams(body)}`,

  // settings
  getPasscodeUrl: ({ type }) => `${hostUsers}/services/passcode/${type}`,
  putUserExchangeUrl: ({ exchange }) => `${hostUsers}/user/exchange/${exchange}`,
  putUserLanguageUrl: () => `${hostUsers}/user/language`,
  putUserCurrencyUrl: () => `${hostUsers}/user/currency`,
  putUserCryptoPriorityUrl: () => `${hostUsers}/user/crypto/priority`,
  putUserCryptoSelectedUrl: () => `${hostUsers}/user/crypto/selected`,
  putUserPinCodeUrl: () => `${hostUsers}/user/safety/pincode`,
  postReserveEmailUrl: () => `${hostUsers}/user/safety/reserve-email`,
  getSendUserReserveEmailConfirmUrl: ({ email }) => `${hostUsers}/user/safety/reserve-email/confirm?email=${email}`,
  getSecretQuestionsUrl: () => `${hostUsers}/user/safety/questions`,
  putUserSecretQuestionsUrl: () => `${hostUsers}/user/safety/questions`,
  putUserSafetyInOutSettingsUrl: () => `${hostUsers}/user/safety/settings`,
  getChatkeyUrl: ({ type }) => `${hostUsers}/services/chatkey/${type}`,
  putConfirmServiceUrl: ({ type }) => `${hostUsers}/services/connect/confirm/${type}`,
  putConnectServiceUrl: ({ type }) => `${hostUsers}/services/connect/${type}`,
  putDisconnectServiceUrl: ({ type }) => `${hostUsers}/services/disconnect/${type}`,
  getFiatCurrenciesUrl: () => `${hostPayment}/fiat`,

  // auth history
  getAuthHistoryUrl: ({ page, count }) => `${hostUsers}/auth/history?count=${count}&page=${page}`,

  // log history
  getLogHistoryUrl: ({ count, page }) => `${hostUsers}/log/history?count=${count}&page=${page}`,

  // dashboard
  getLastTransactionsUrl: () => `${hostPayment}/wallets/last-transactions`,

  // stats
  getCryptoStatUrl: (alias, body = {}) => `${hostStats}/stats/${alias}${getParams(body)}`,
  getAllCryptoStatsUrl: (body = {}) => `${hostStats}/stats/global${getParams(body)}`,
  getUserFavoriteCryptoUrl: () => `${hostUsers}/user/crypto/favorite`,

  // buckets
  getFileBucketUrl: bucketName => `${hostBuckets}/file/${bucketName}`,
  getUploadingBucketUrl: bucketName => `${hostBuckets}/api/v1/uploading/${bucketName}`,

  // translations
  getTranslationsUrl: () => `${hostTranslations}/locales`,
};
