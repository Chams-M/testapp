import ServiceInDemand from "../components/Dashboard/Service/serviceDemand";
import ServiceProjects from "../components/Dashboard/Service/serviceProjects";
export const serviceLayout = [
    {
      title: 'Your service in demand',
      data: <ServiceInDemand/>,
    },
    {
      title: 'Projects that need your service',
      data: <ServiceProjects/>,
    },

  ];
  