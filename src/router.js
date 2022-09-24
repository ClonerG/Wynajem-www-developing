import Admin from './pages/admin';
import Form from './pages/form';
import Main from './pages/main';
import Subscriptions from './pages/subscriptions';
import Templates from './pages/templates ';
import Support from './pages/support';
import {
  ACCESSORIES_ROUTE,
  ADMIN_ROUTE,
  BAGS_ROUTE,
  BEAUTY_ROUTE,
  BLISSFUL_ROUTE,
  BOOKS_ROUTE,
  CLOSE_ROUTE,
  CREATINGPAGE_ROUTE,
  DECOR_ROUTE,
  DEVELOP_ROUTE,
  DEVICEF_ROUTE,
  ELECTRONICS_ROUTE,
  FASHION_ROUTE,
  FORM_ROUTE,
  GLASSES_ROUTE,
  GOOGLEADS_ROUTE,
  JAWERLIS_ROUTE,
  JEWELRY_ROUTE,
  LEANDING_ROUTE,
  LIFE_ROUTE,
  MAIN_ROUTE,
  NOUS_ROUTE,
  PRICKLES_ROUTE,
  PRIVACY_ROUTE,
  RESTAURANTS_ROUTE,
  SEOBLOG_ROUTE,
  SERVICES_ROUTE,
  SHOES_ROUTE,
  SITES_ROUTE,
  SNEAKERS_ROUTE,
  SPORT_ROUTE,
  SUBSCRIPTIONS_ROUTE,
  SUPPORT_ROUTE,
  TECHNICAL_ROUTE,
  TEMPLATES_ROUTE,
  WATCH_ROUTE,
} from './utils/consts';
import Bags from './templates/pages/Aksesoria/Bags';
import Accessories from './templates/pages/Accessories';
import Fashion from './templates/pages/Fashion';
import Decor from './templates/pages/Decor';
import Electronics from './templates/pages/Electronics';
import Sites from './templates/pages/Sites';
import Beauty from './templates/pages/Beauty';
import Blissful from './templates/pages/Blissful';
import Books from './templates/pages/Books';
import Jewelry from './templates/pages/Jewelry';
import Restaurants from './templates/pages/Restaurants';
import Services from './templates/pages/Services';
import Sport from './templates/pages/Sport';
import Privacy from './pages/privacy';
import Shoes from './templates/pages/Aksesoria/Shoes';
import Nous from './templates/pages/Fashion/nous';
import Sneakers from './templates/pages/Fashion/Sneakers';
import Close from './templates/pages/Fashion/Close';
import Life from './templates/pages/Fashion/life';
import Watch from './templates/pages/Aksesoria/Watch';
import Jawerlis from './templates/pages/Aksesoria/Jewelries';
import Leanding from './pages/leanding';
import Develop from './pages/subpage/delevop';
import GoogleAds from './pages/subpage/googleAds';
import Seoblog from './pages/subpage/seoBlog';
import CreatingPage from './pages/subpage/creatingpage';
import DeviceF from './pages/subpage/deviceF';
import Technical from './pages/subpage/technicalService';
import Prickles from './templates/pages/Decor/prickles';
import Glasses from './templates/pages/Aksesoria/Glasses';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: FORM_ROUTE,
    Component: Form,
  },
  {
    path: SUBSCRIPTIONS_ROUTE,
    Component: Subscriptions,
  },
  {
    path: TEMPLATES_ROUTE,
    Component: Templates,
  },
  {
    path: SUPPORT_ROUTE,
    Component: Support,
  },
  {
    path: PRIVACY_ROUTE,
    Component: Privacy,
  },
  {
    path: LEANDING_ROUTE,
    Component: Leanding,
  },

  // SUB-PAGES

  {
    path: DEVELOP_ROUTE,
    Component: Develop,
  },
  {
    path: GOOGLEADS_ROUTE,
    Component: GoogleAds,
  },
  {
    path: SEOBLOG_ROUTE,
    Component: Seoblog,
  },
  {
    path: CREATINGPAGE_ROUTE,
    Component: CreatingPage,
  },
  {
    path: DEVICEF_ROUTE,
    Component: DeviceF,
  },
  {
    path: TECHNICAL_ROUTE,
    Component: Technical,
  },

  // TEMPLATES MAIN PAGES

  {
    path: ACCESSORIES_ROUTE,
    Component: Accessories,
  },

  {
    path: BEAUTY_ROUTE,
    Component: Beauty,
  },

  {
    path: BLISSFUL_ROUTE,
    Component: Blissful,
  },

  {
    path: BOOKS_ROUTE,
    Component: Books,
  },

  {
    path: DECOR_ROUTE,
    Component: Decor,
  },

  {
    path: ELECTRONICS_ROUTE,
    Component: Electronics,
  },

  {
    path: FASHION_ROUTE,
    Component: Fashion,
  },

  {
    path: JEWELRY_ROUTE,
    Component: Jewelry,
  },

  {
    path: RESTAURANTS_ROUTE,
    Component: Restaurants,
  },

  {
    path: SERVICES_ROUTE,
    Component: Services,
  },

  {
    path: SITES_ROUTE,
    Component: Sites,
  },

  {
    path: SPORT_ROUTE,
    Component: Sport,
  },

  // TEMPLATES

  {
    path: BAGS_ROUTE,
    Component: Bags,
  },
  {
    path: SHOES_ROUTE,
    Component: Shoes,
  },
  {
    path: SNEAKERS_ROUTE,
    Component: Sneakers,
  },
  {
    path: NOUS_ROUTE,
    Component: Nous,
  },
  {
    path: CLOSE_ROUTE,
    Component: Close,
  },
  {
    path: LIFE_ROUTE,
    Component: Life,
  },
  {
    path: WATCH_ROUTE,
    Component: Watch,
  },
  {
    path: JAWERLIS_ROUTE,
    Component: Jawerlis,
  },
  {
    path: PRICKLES_ROUTE,
    Component: Prickles,
  },
  {
    path: GLASSES_ROUTE,
    Component: Glasses,
  },

];
