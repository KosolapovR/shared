import { notificationTypes as NT } from '../consts';

export default (notifications) => {
  let forumCount = 0;
  let exchangeCount = 0;
  let dealsCount = 0;
  let walletsCount = 0;
  let offersCount = 0;

  notifications.forEach((N) => {
    // если уведомление прочитано, пропускаем итерацию
    if (N.get('readed')) {
      return;
    }

    switch (N.get('type')) {
      case NT.SUBSCRIPTION: {
        exchangeCount += 1;
        break;
      }
      case NT.OFFER_ACTIVE:
      case NT.OFFER_PAUSED: {
        offersCount += 1;
        break;
      }
      case NT.WALLET_CHARGE_OFF:
      case NT.WALLET_RECHARGE: {
        walletsCount += 1;
        break;
      }
      case NT.DEAL_CANCELED:
      case NT.DEAL_COMPLETED:
      case NT.DEAL_IN_CONFIRMATION:
      case NT.DEAL_TIMEOUT:
      case NT.DISPUTE_OPENED:
      case NT.DISPUTE_CLOSED:
      case NT.TRADE_REQUEST_SENT:
      case NT.TRADE_REQUEST_ACCEPTED:
      case NT.NEW_SUGGESTIONS:
      case NT.NEW_MESSAGES:
      case NT.NEW_MESSAGES_ADMIN:
      case NT.NEW_COMMENT: {
        dealsCount += 1;
        break;
      }
      case NT.FORUM_MESSAGE_ANSWER:
      case NT.FORUM_MESSAGE_RATED:
      case NT.FORUM_HIT_TO_ACTUAL_TOPICS:
      case NT.FORUM_TOPIC_MOVED:
      case NT.FORUM_TOPIC_DELETED:
      case NT.FORUM_TOPIC_ATTACHED:
      case NT.FORUM_TOPIC_DETACHED:
      case NT.FORUM_TOPIC_CLOSED:
      case NT.FORUM_POST_QUOTED:
      case NT.FORUM_POST_DELETED:
      case NT.FORUM_SUB_TOPIC_MESSAGE:
      case NT.FORUM_NEW_MESSAGE:
      case NT.FORUM_NEW_ROLE:
      case NT.FORUM_ACC_BANNED:
      case NT.FORUM_ACC_UNBANNED: {
        forumCount += 1;
        break;
      }
      default: break;
    }
  });

  return {
    forum: forumCount,
    exchange: exchangeCount,
    deals: dealsCount,
    wallets: walletsCount,
    offers: offersCount,
  };
};
