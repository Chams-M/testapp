import PerformanceSection from "../components/Dashboard/UserPerformance/performance_section";
import ActionsSummary from "../components/Dashboard/Actions/actionsSummary";
import ProfileViewers from "../components/Dashboard/profileViewers";
import ProposalsSummary from "../components/Dashboard/proposalsSummary";
import InvestSummary from "../components/Dashboard/investSummary";

export const dashboardLayout = [
    {
      title: 'Actions Summary',
      data: <ActionsSummary/>,
    },
    {
      title: 'Profile Viewers',
      data: 'This is the content of card 2',
    },
    {
      title: 'Invest Summary',
      data: 'This is the content of card 3',
    },
    {
      title: 'Proposals Summary',
      data: 'This is the content of card 3',
    },
  ];
  