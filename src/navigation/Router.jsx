import { AuthorizedPaths, UnauthorizedPaths, CommonPaths } from "./paths";
import { useRoutes, Navigate } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import DashboardLayout from "../layouts/Dashboard/dashboard-layout";
import PropertiesLayout from "../layouts/PropertiesLayout";
import MainContainer from "../pages/Dashboard/MainContainer/MainContainer";
import Page404 from "../pages/Page404";
import Auth from "../pages/Authentification/Auth";
import ServiceContainer from "../pages/Dashboard/Service/serviceContainer";
import InvestmentsContainer from "../pages/Dashboard/Investments/investmentsContainer";
import ProfileContainer from "../pages/Dashboard/Profile/profileContainer";
import EmailGenerator from "../pages/Dashboard/EmailGenerator/emailGenerator";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import Properties from "../pages/Properties";

export default function Router() {
  return useRoutes([
    {
      path: CommonPaths.Home,
      element: <>home</>,
    },
    {
      path: UnauthorizedPaths.properties,
      element: <PropertiesLayout />,
      children: [
        {
          path: "",
          element: <Properties />,
        },
        //   {
        //     path: UnauthorizedPaths.investProperty,
        //     element: <InvestProperty/>,
        //   },
        //   {
        //     path: UnauthorizedPaths.submitProposal,
        //     element: <InvestProposal/>,
        //   },
      ],
    },
    // {
    //     path: UnauthorizedPaths.profileInvestor,
    //     element: <ProfileInvestor/>,
    //   },

    {
      path: CommonPaths.authPrefix,
      element: (
        <GuestGuard>
          <Auth/>
        </GuestGuard>
      ),
    },
    // Protected Routes
    {
      path: CommonPaths.dashboard,
      element: (
        <AuthGuard>
          <DashboardLayout></DashboardLayout>
        </AuthGuard>
      ),
      children: [
        {
          path: "",
          element: <MainContainer />,
        },
        {
          path: AuthorizedPaths.service,
          element: <ServiceContainer />,
        },
        {
          path: AuthorizedPaths.profile,
          element: <ProfileContainer />,
        },
        {
          path: AuthorizedPaths.emailGenerator,
          element: <EmailGenerator />,
        },
        {
          path: AuthorizedPaths.paymentHistory,
          element: <PaymentHistory />,
        },
        {
          path: AuthorizedPaths.investments,
          element: <InvestmentsContainer />,
        },
      ],
    },
    // Error Routes
    { path: CommonPaths.errors["404"], element: <Page404 /> },

    { path: "*", element: <Navigate to={CommonPaths.errors["404"]} replace /> },
  ]);
}
