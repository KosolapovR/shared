import dashboard from 'assets/img/menu/dashboard.svg';
import dashboardActive from 'assets/img/menu/dashboardActiveIcon.svg';
import dashboardMobile from 'assets/img/menu/dashboardMobile.svg';
import dashboardMobileActive from 'assets/img/menu/dashboardMobileActiveIcon.svg';
import market from 'assets/img/menu/market.svg';
import marketActive from 'assets/img/menu/marketActiveIcon.svg';
import marketMobile from 'assets/img/menu/marketMobile.svg';
import marketMobileActive from 'assets/img/menu/marketMobileActiveIcon.svg';
import wallets from 'assets/img/menu/wallets.svg';
import walletsActive from 'assets/img/menu/walletsActiveIcon.svg';
import walletsMobile from 'assets/img/menu/walletsMobile.svg';
import walletsMobileActive from 'assets/img/menu/walletsMobileActiveIcon.svg';
import dealsIcon from 'assets/img/menu/deals.svg';
import dealsActive from 'assets/img/menu/dealsActiveIcon.svg';
import dealsMobileIcon from 'assets/img/menu/dealsMobile.svg';
import dealsMobileActive from 'assets/img/menu/dealsMobileActiveIcon.svg';
import offers from 'assets/img/menu/offers.svg';
import offersActive from 'assets/img/menu/offersActiveIcon.svg';
import profileMobile from 'assets/img/menu/profileMobile.svg';
import profileMobileActive from 'assets/img/menu/profileMobileActiveIcon.svg';

import stats from 'assets/img/menu/statsIcon.svg';
import statsActive from 'assets/img/menu/statsActiveIcon.svg';
import help from 'assets/img/menu/help.svg';
import helpActive from 'assets/img/menu/helpActiveIcon.svg';
import news from 'assets/img/menu/news.svg';
import newsActive from 'assets/img/menu/newsActiveIcon.svg';
// import forum from 'assets/img/menu/forum.svg';
// import forumActive from 'assets/img/menu/forumActiveIcon.svg';

import swap from 'assets/img/swap.svg';
import voucher from 'assets/img/voucher.svg';

import question from 'assets/img/question.svg';
// import community from 'assets/img/community.svg';
import newsIcon from 'assets/img/news.svg';

import { siteName } from '../config';

import routes from './routes';

const SIDE_MENU = t => [
  {
    id: 'dashboard',
    route: routes.getDashboardBase(),
    icon: dashboard,
    iconActive: dashboardActive,
    name: t('BREADCRUMBS.DASHBOARD'),
  },
  {
    id: 'exchange',
    route: routes.getExchangeBase(),
    icon: market,
    iconActive: marketActive,
    name: t('BREADCRUMBS.MARKET.MAIN'),
  },
  {
    id: 'wallets',
    route: routes.getWalletsBase(),
    icon: wallets,
    iconActive: walletsActive,
    name: t('BREADCRUMBS.PAYMENTS'),
  },
  {
    id: 'deals',
    route: routes.getDealsBase(),
    icon: dealsIcon,
    iconActive: dealsActive,
    name: t('BREADCRUMBS.DEALS.MAIN'),
  },
  {
    id: 'offers',
    route: routes.getOffersBase(),
    icon: offers,
    iconActive: offersActive,
    name: t('BREADCRUMBS.DIRECTIONS.MAIN'),
  },
];

const MENU_MOBILE = () => [
  {
    id: 'wallets',
    route: routes.getWalletsBase(),
    icon: walletsMobile,
    iconActive: walletsMobileActive,
  },
  {
    id: 'exchange',
    route: routes.getExchangeBase(),
    additionalRoute: routes.getOffersBase(),
    icon: marketMobile,
    iconActive: marketMobileActive,
  },
  {
    id: 'dashboard',
    route: routes.getDashboardBase(),
    icon: dashboardMobile,
    iconActive: dashboardMobileActive,
  },
  {
    id: 'deals',
    route: routes.getDealsBase(),
    icon: dealsMobileIcon,
    iconActive: dealsMobileActive,
  },
  {
    id: 'profile',
    route: routes.getProfileBase(),
    icon: profileMobile,
    iconActive: profileMobileActive,
  },
];

const SUB_SIDE_MENU = t => [
  {
    id: 'stats',
    route: routes.getStatsBase(),
    icon: stats,
    iconActive: statsActive,
    name: t('BREADCRUMBS.STATS'),
  },
  {
    id: 'help',
    route: routes.getFaqBase(),
    icon: help,
    iconActive: helpActive,
    name: t('BREADCRUMBS.HELP'),
  },
  // {
  //   id: 'forum',
  //   route: routes.getForumBase(),
  //   icon: forum,
  //   iconActive: forumActive,
  //   name: t('BREADCRUMBS.FORUM'),
  // },
  {
    id: 'news',
    route: routes.getNewsBase(),
    icon: news,
    iconActive: newsActive,
    name: t('BREADCRUMBS.NEWS'),
  },
];

const FORUM_PAGE_HEADER = (/* t */) => [
  // {
  //   icon: '',
  //   text: t('FORUM.PAGE_HEADER.NEW_MESSAGES'),
  // },
  // {
  //   icon: '',
  //   text: t('FORUM.PAGE_HEADER.RULES'),
  //   href: routes.getFaqTermsUse(),
  // },
  // {
  //   icon: rss,
  //   text: t('FORUM.PAGE_HEADER.RSS'),
  // },
];

const STICKY_HEADER_LANDING = t => [
  {
    title: t('LANDING.HEADER.BUY'),
    href: routes.getAuthBase(),
    isLink: false,
  },
  {
    title: t('LANDING.HEADER.FAQ'),
    href: routes.getFaqBase(),
    isLink: true,
  },
  // {
  //   title: t('LANDING.HEADER.FORUM'),
  //   href: routes.getForumBase(),
  //   isLink: true,
  // },
  {
    title: t('LANDING.HEADER.NEWS'),
    href: routes.getNewsBase(),
    isLink: true,
  },
];

const GLOBAL_MENU = t => [
  // {
  //   id: 'send',
  //   route: 'send',
  //   icon: receiveArrow,
  //   name: t('HOME.UI_GLOBAL_HEADER.SEND'),
  //   iconStyle: { opacity: 0.3 },
  // },
  // {
  //   id: 'receive',
  //   route: 'receive',
  //   icon: sendArrow,
  //   name: t('HOME.UI_GLOBAL_HEADER.RECEIVE'),
  //   iconStyle: { opacity: 0.3 },
  // },
  {
    id: 'swap',
    route: 'swap',
    icon: swap,
    name: t('HOME.UI_GLOBAL_HEADER.EXCHANGE'),
  },
  {
    id: 'voucher',
    route: 'voucher',
    icon: voucher,
    name: t('HOME.UI_GLOBAL_HEADER.VOUCHER'),
  },
];

const FAQ_NAVIGATION = t => [
  // {
  //   id: 'forum',
  //   icon: community,
  //   headText: t('HOME.PAGE_FAQ.PAGE_MENU.FAQ_NAVIGATION_ITEMS.FORUM.HEADTEXT', { siteName }),
  //   href: routes.getForumBase(),
  //   description: t('HOME.PAGE_FAQ.PAGE_MENU.FAQ_NAVIGATION_ITEMS.FORUM.DESCR'),
  // },
  {
    id: 'blog',
    icon: newsIcon,
    headText: t('HOME.PAGE_FAQ.PAGE_MENU.FAQ_NAVIGATION_ITEMS.BLOG.HEADTEXT', { siteName }),
    href: routes.getNewsPageWithParams({ isInternal: true }),
    description: t('HOME.PAGE_FAQ.PAGE_MENU.FAQ_NAVIGATION_ITEMS.BLOG.DESCR'),
  },
  {
    id: 'tech',
    icon: question,
    headText: t('HOME.PAGE_FAQ.PAGE_MENU.FAQ_NAVIGATION_ITEMS.TECH.HEADTEXT'),
    description: t('HOME.PAGE_FAQ.PAGE_MENU.FAQ_NAVIGATION_ITEMS.TECH.DESCR'),
    isSupport: true,
  },
];

export {
  SIDE_MENU,
  MENU_MOBILE,
  SUB_SIDE_MENU,
  FORUM_PAGE_HEADER,
  STICKY_HEADER_LANDING,
  GLOBAL_MENU,
  FAQ_NAVIGATION,
};
