import { constructPath } from 'utils/routing';

const authPrefix = constructPath('auth');
const dashboardPrefix = constructPath('dashboard');
const forgetPasswordPrefix = constructPath(authPrefix, 'forget-password');
const registerPrefix = constructPath(authPrefix, 'register');

const ErrorPaths = {
  404: constructPath('404'),
  offline: constructPath('offline'),
};

export const CommonPaths = {
  index: constructPath(dashboardPrefix),
  authPrefix,
  errors: ErrorPaths,
};

export const UnauthorizedPaths = {
  login: constructPath(authPrefix, 'login'),
  register: registerPrefix,
  personalInformation: constructPath(registerPrefix, 'personal-information'),
  professionalInformation: constructPath(registerPrefix, 'professional-information'),
  forgetPassword: forgetPasswordPrefix,
  oAuth: constructPath('oauth'),
};

export const AuthorizedPaths = {
  home: constructPath(dashboardPrefix),
  inbox: constructPath(dashboardPrefix, 'inbox'),
  tutorial: constructPath('tutorial'),
  catalog: constructPath(dashboardPrefix, 'catalog'),
  catalogConstructionTrades: constructPath(dashboardPrefix, 'catalog', 'construction-trades'),
  allBtpServices: constructPath(
    dashboardPrefix,
    'catalog',
    'construction-trades',
    ':id',
    'services',
  ),
  catalogDigitalProfessions: constructPath(dashboardPrefix, 'catalog', 'digital-professions'),
  allDigitalServices: constructPath(
    dashboardPrefix,
    'catalog',
    'digital-professions',
    ':id',
    'services',
  ),
  serviceDetails: constructPath(
    dashboardPrefix,
    'catalog',
    'digital-professions',
    ':id',
    'services',
    ':serviceId',
  ),
  profile: constructPath(dashboardPrefix, 'profile'),
  addService: constructPath(dashboardPrefix, 'profile', 'add', 'service'),
  addAlbum: constructPath(dashboardPrefix, 'profile', 'add', 'album'),
  addVideo: constructPath(dashboardPrefix, 'profile', 'add', 'video'),
  publicProfile: constructPath(dashboardPrefix, 'public', 'profile', ':id'),
  calendar: constructPath(dashboardPrefix, 'calendar'),
  contact: constructPath(dashboardPrefix, 'contact-us'),
  faq: constructPath(dashboardPrefix, 'faq'),
  legalNotice: constructPath(dashboardPrefix, 'legal-notice'),
  privacyPolicy: constructPath(dashboardPrefix, 'privacy-policy'),
  notifications: constructPath(dashboardPrefix, 'notifications'),
  stories: constructPath(dashboardPrefix, 'stories', ':profileId'),
  invitations: constructPath(dashboardPrefix, 'invitations'),
  suggestions: constructPath(dashboardPrefix, 'suggestions'),
  shop: constructPath(dashboardPrefix, 'shop'),
  help: constructPath(dashboardPrefix, 'help'),

  // settings:
  profileSettings: constructPath(dashboardPrefix, 'profile', 'settings'),
  profileInformationSettings: constructPath(dashboardPrefix, 'profile', 'settings', 'information'),
  profileServicesSettings: constructPath(dashboardPrefix, 'profile', 'settings', 'services'),
  UpdateService: constructPath(dashboardPrefix, 'profile', 'settings', 'services', ':id'),
  profileFollowersSettings: constructPath(dashboardPrefix, 'profile', 'settings', 'followers'),
  profileTransactionsSettings: constructPath(
    dashboardPrefix,
    'profile',
    'settings',
    'transactions',
  ),
  profileRevenuesSettings: constructPath(dashboardPrefix, 'profile', 'settings', 'revenues'),
  profilePasswordSettings: constructPath(dashboardPrefix, 'profile', 'settings', 'password'),
};
