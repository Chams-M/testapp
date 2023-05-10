import NbofInvestments from "../components/Dashboard/Investments/nbofInvestments"
import PropertiesInvested from "../components/Dashboard/Investments/propertiesInvested"
import SellInvestments from "../components/Dashboard/Investments/sellInvestments"

export const investmentsLayout = [
    {
      title: 'Number of investments',
      data: <NbofInvestments/>,
    },
    {
      title: 'Properties you have invested',
      data: <PropertiesInvested/>,
    },
    {
        title: 'Sell your invetsments',
        data: <SellInvestments/>,
      },

  ];
  