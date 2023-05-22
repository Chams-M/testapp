import { constructPath } from "../utils/routing";

const authPrefix = constructPath("authenticate");
const dashboardPrefix = constructPath("dashboard");
const propertiesPrefix = constructPath("properties");

const ErrorPaths = {
  404: constructPath("404"),
};

export const CommonPaths = {
  dashboard: constructPath(dashboardPrefix),
  authPrefix,
  Home: constructPath(""),
  errors: ErrorPaths,
};

export const UnauthorizedPaths = {
  authPrefix,
  oAuth: constructPath("oauth"),
  properties: constructPath(propertiesPrefix),
  investProperty: constructPath(propertiesPrefix, ":id", "invest"),
  profileInvestor: constructPath("investors", ":id"),
  submitProposal: constructPath(propertiesPrefix, ":id", "submit-proposal"),
};

export const AuthorizedPaths = {
  home: constructPath(dashboardPrefix),
  service: constructPath(dashboardPrefix, "service"),
  investments: constructPath(dashboardPrefix, "investments"),
  profile: constructPath(dashboardPrefix, "profile"),
  emailGenerator: constructPath(dashboardPrefix, "email-generator"),
  paymentHistory: constructPath(dashboardPrefix, "payment-history"),
};
