import { RiHomeFill, RiHomeLine, RiDatabase2Fill, RiDatabase2Line, RiPieChartFill, RiPieChartLine, RiSettingsFill, RiSettingsLine } from 'react-icons/ri';

export const navItems = [
  {
    title: '首頁',
    url: '/',
    icon: {
      normal: <RiHomeLine />,
      active: <RiHomeFill />,
    },
  },
  {
    title: '收支記錄',
    url: '/records',
    icon: {
      normal: <RiDatabase2Line />,
      active: <RiDatabase2Fill />,
    },
  },
  {
    title: '收支分析',
    url: '/analysis',
    icon: {
      normal: <RiPieChartLine />,
      active: <RiPieChartFill />,
    },
  },
  {
    title: '個人設定',
    url: '/settings',
    icon: {
      normal: <RiSettingsLine />,
      active: <RiSettingsFill />,
    },
  },
];
