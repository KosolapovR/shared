import {getParams, getUserParams} from "../helpers";

/**
 *
 * @param hostUsers
 * @param hostPayment
 * @param hostBuffer
 * @param hostMarket
 * @param hostCrypto
 * @param hostDeals
 * @param hostForum
 * @param hostChat
 * @param hostStats
 * @param hostBuckets
 * @param hostTranslations
 * @param hostSocketUsers
 * @param hostSocketChat
 * @returns {{getExchangesListUrl: (function(*=): string), getAllCryptoStatsUrl: (function(*=): string), getAccountPaymentSystemByIdUrl: (function(*): string), get2faDisableUrl: (function(): string), getReadNotificationsUrl: (function(): string), getSignMsigTxUrl: (function(): string), getBoardsTopicAvailableUrl: (function(): string), getUploadingBucketUrl: (function(*): string), getStatisticUserUrl: (function(*): string), getWalletsUrl: (function(*=): string), getInternalWalletForceUrl: (function(): string), getRechargeRequestByIdUrl: (function(*): string), getMessagesSearchUrl: (function(*=): string), putUserCryptoPriorityUrl: (function(): string), getCheckEmailUrl: (function(*=): string), getChangeUserLanguage: (function(): string), getInternalWalletAllUrl: (function(): string), getSubmitReceivingUrl: (function(*): string), getResendEmailUrl: (function(*=): string), getSubscriptionUrl: (function(*=): string), getUserLocationUrl: (function(): string), getMarketUrl: (function(*=): string), getPasscodeUrl: (function({type: *}): string), getFeeUrl: (function(*=): string), getOfferByIdUrl: (function(*): string), getNewsSearchUrl: (function(*=): string), getLogHistoryUrl: (function({count: *, page: *}): string), getCurrencyCommissionUrl: (function(*, *=): string), getSubscriptionsUrl: (function(): string), getFiatCurrenciesUrl: (function(): string), getNotificationsUrl: (function(*=): string), getLogin2faUrl: (function(): string), getPasswordChangeUrl: (function(): string), getPutUserInfoSettingsUrl: (function(): string), putUserLanguageUrl: (function(): string), getSubscriptionMarkAllAsReadUrl: (function(): string), getForumUserMessages: (function(*, *=): string), getCreateOfferUrl: (function(): string), putUserCryptoSelectedUrl: (function(): string), getTickersUrl: (function(*=): string), getPasswordRecovery2faUrl: (function(): string), getSendMoneyFromMsigUrl: (function(*): string), getSubscribeUrl: (function(): string), getPutUserProfileUrl: (function(): string), getRateDealUrl: (function(*): string), getStoriesUrl: (function(*=): string), getWalletByIdUrl: (function(*): string), get2faCodeUrl: (function({type?: *}=): string), getAcceptTermsUrl: (function(): string), getInternalWalletUrl: (function(): string), getMessageByIdUrl: (function(*): string), getTranslatesUrl: (function(*): string), getProfitLimitsUrl: (function(): string), putConfirmServiceUrl: (function({type: *}): string), getInviteAdminUrl: (function(*): string), getPaymentSystemsUrl: (function(): string), getRechargeRequestUrl: (function(): string), getConfirmDealUrl: (function(*): string), getPublicUserProfileUrl: (function(*=): string), getAccountPaymentSystemsUrl: (function(*=): string), getMostPopularPairUrl: (function(): string), getSendUserReserveEmailConfirmUrl: (function({email: *}): string), getUserUrl: (function(): string), getCheckPinUrl: (function(*=): string), getSubsCountUrl: (function(): string), getNewsCommentsUrl: (function(*): string), getTopicByIdUrl: (function(*, *=): string), getEmailChangeUrl: (function(): string), getVotesUrl: (function(*): string), getUserFavoriteCryptoUrl: (function(): string), getMessagesTopicUrl: (function(): string), getCurrencyCoursesUrl: (function(*, *=): string), getCreateWalletUrl: (function(): string), getConfirmEmailUrl: (function(*=): string), getLastTransactionsUrl: (function(): string), getFileBucketUrl: (function(*): string), getDealsUrl: (function(*=): string), getMarkStoryAsViewedUrl: (function(*): string), getMarketPeopleCountUrl: (function(): string), getChatSocketUrl: (function(*=): string), getBoardsUrl: (function(*=): string), getStatisticUrl: (function(): string), get2faCodesUrl: (function(): string), getMessagesUrl: (function(*): string), postReserveEmailUrl: (function(): string), getArticleUrl: (function(*): string), getCryptocurrenciesCommissionsUrl: (function(): string), getFaqSearchUrl: (function(*=): string), getEmpoExchangeRateUrl: (function(*=): string), getActiveTopicsUrl: (function(): string), getSingleNewsUrl: (function(*): string), getCheckUsernameUrl: (function(*=): string), getSessionUrl: (function(): string), getWalletValidateUrl: (function(*=): string), getTranslationsUrl: (function(): string), getSubmitSendingUrl: (function(*): string), getMessageUrl: (function(): string), getCreateTxUrl: (function(): string), getChatkeyUrl: (function({type: *}): string), getTermsUrl: (function(): string), getExchangeRateBySymbolUrl: (function(*=): string), getTopicsSearchUrl: (function(*=): string), getUserInfoUrl: (function(*=): string), putConnectServiceUrl: (function({type: *}): string), getNewsUrl: (function(*=): string), getDealUrl: (function(): string), getCommentReplyUrl: (function(): string), getMarketPairsUrl: (function(): string), getBanksUrl: (function(*=): string), getToggleOfferUrl: (function(*, *): string), getSubmitSignTransactionUrl: (function(*): string), getChangeStep: (function(): string), getCreateNewMsigWalletUrl: (function(): string), putUserSafetyInOutSettingsUrl: (function(): string), getOffersUrl: (function(*=): string), getPasswordRecoveryUrl: (function(*=): string), putUserSecretQuestionsUrl: (function(): string), getBoardUrl: (function(*, *=): string), getCryptoBlockHeightUrl: (function(): string), get2faEnableUrl: (function(): string), getUsersOnlineUrl: (function(): string), getSocketsUrl: (function(*=): string), getSessionsUrl: (function(): string), getBankCardUrl: (function(): string), getSecretQuestionsUrl: (function(): string), getLoginUrl: (function(): string), get2faKeyUrl: (function(): string), putUserExchangeUrl: (function({exchange: *}): string), getFaqTopicsUrl: (function(): string), getCancelDealUrl: (function(*): string), getSubcribeByIdUrl: (function(*): string), getCommentsUrl: (function(*=): string), getDealByIdUrl: (function(*): string), getBankCardByIdUrl: (function(*): string), getAesKeyUrl: (function(*=): string), getLogOutUrl: (function(): string), getCryptoStatUrl: (function(*, *=): string), getImportedWalletUrl: (function(): string), putUserPinCodeUrl: (function(): string), putDisconnectServiceUrl: (function({type: *}): string), getSendMoneyFromInternalUrl: (function(*): string), getConfirmUrl: (function(): string), putUserCurrencyUrl: (function(): string), getCryptocurrenciesUrl: (function(): string), getTopicUrl: (function(): string), getAuthHistoryUrl: (function({page: *, count: *}): string)}}
 */
const configureEndpoints = ({
                    hostUsers,
                    hostPayment,
                    hostBuffer,
                    hostMarket,
                    hostCrypto,
                    hostDeals,
                    hostForum,
                    hostChat,
                    hostStats,
                    hostBuckets,
                    hostTranslations,
                    hostSocketUsers,
                    hostSocketChat,
                }) => ({
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
    getCurrencyCommissionUrl: (alias, body = {}) => `${hostPayment}/commission/symbol/${alias}${getParams(body)}?serviceSell=eur`,


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
})

module.exports = {
    configureEndpoints
};
