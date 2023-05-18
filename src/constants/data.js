  import DashboardIcon from '@mui/icons-material/Dashboard';
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
  import BusinessIcon from '@mui/icons-material/Business';
  import MailIcon from '@mui/icons-material/Mail';
  import EngineeringIcon from '@mui/icons-material/Engineering';
  import PaymentIcon from '@mui/icons-material/Payment';
  import LogoutIcon from '@mui/icons-material/Logout';
  import WbSunnyIcon from '@mui/icons-material/WbSunny';
  import CircleIcon from '@mui/icons-material/Circle';

  export const SidebarData = [

      {
          id:1,
          icon :DashboardIcon,
          heading:"Dashboard",
          route:"/dashboard"
      },
      {
          id:2,
          icon :AttachMoneyIcon,
          heading:"Investments",
          route:"/investments"
      },
      {   id:3,
          icon :BusinessIcon,
          heading:"Service",
          route:"/service"
      },
      {   id:4,
          icon :MailIcon,
          heading:"Email Generator",
          route:"/email_generator"
      },
      { id:5,
        icon :EngineeringIcon,
        heading:"Profile",
        route:"/profile"
    },
    {   id:6,
        icon :PaymentIcon,
        heading:"Payment History",
        route:"/payment_history"
    },
    {   id:7,
        icon :LogoutIcon,
        heading:"Logout",
        route:"/logout"
    },
  
  ];

export const themeToggle=[
{
    light:WbSunnyIcon,
    dark:CircleIcon,
}
]
  
  //user Data
  
