import { PiHamburgerFill, PiShoppingCartFill, PiSignatureFill } from "react-icons/pi";
import { IoCarSport, IoGameController, IoCellular, IoFitness } from "react-icons/io5";
import { BsSuitcase2Fill, BsQuestionCircleFill } from "react-icons/bs";
import { MdMedicalServices } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { RiSmartphoneFill, RiMoneyDollarBoxFill, RiMoneyDollarCircleFill } from "react-icons/ri";

export const typeList = [
  {
    type: 'food',
    content: '飲食',
    icon: <PiHamburgerFill />,
    color: {
      dark: 'hsl(88, 50%, 40%)',
      light: 'hsl(88, 50%, 50%)',
    }
  },
  {
    type: 'traffic',
    content: '交通',
    icon: <IoCarSport />,
    color: {
      dark: 'hsl(200, 15%, 40%)',
      light: 'hsl(200, 15%, 50%)',
    }
  },
  {
    type: 'shopping',
    content: '購物',
    icon: <PiShoppingCartFill />,
    color: {
      dark: 'hsl(65, 69%, 40%)',
      light: 'hsl(65, 69%, 50%)',
    }
  },
  {
    type: 'entertainment',
    content: '娛樂',
    icon: <IoGameController />,
    color: {
      dark: 'hsl(291, 47%, 40%)',
      light: 'hsl(291, 47%, 50%)',
    }
  },
  {
    type: 'travel',
    content: '旅遊',
    icon: <BsSuitcase2Fill />,
    color: {
      dark: 'hsl(199, 92%, 40%)',
      light: 'hsl(199, 92%, 50%)',
    }
  },
  {
    type: 'medical',
    content: '醫療',
    icon: <MdMedicalServices />,
    color: {
      dark: 'hsl(354, 100%, 40%)',
      light: 'hsl(354, 100%, 50%)',
    }
  },
  {
    type: 'insurance',
    content: '保險',
    icon: <PiSignatureFill />,
    color: {
      dark: 'hsl(175, 41%, 40%)',
      light: 'hsl(175, 41%, 50%)',
    }
  },
  {
    type: 'tuition',
    content: '學費',
    icon: <HiAcademicCap />,
    color: {
      dark: 'hsl(16, 16%, 40%)',
      light: 'hsl(16, 16%, 50%)',
    }
  },
  {
    type: 'rent',
    content: '房租',
    icon: <TiHome />,
    color: {
      dark: 'hsl(36, 100%, 40%)',
      light: 'hsl(36, 100%, 50%)',
    }
  },
  {
    type: 'internet',
    content: '網路費',
    icon: <IoCellular />,
    color: {
      dark: 'hsl(199, 92%, 40%)',
      light: 'hsl(199, 92%, 50%)',
    }
  },
  {
    type: 'phone',
    content: '手機費',
    icon: <RiSmartphoneFill />,
    color: {
      dark: 'hsl(187, 71%, 40%)',
      light: 'hsl(187, 71%, 50%)',
    }
  },
  {
    type: 'sports',
    content: '運動',
    icon: <IoFitness />,
    color: {
      dark: 'hsl(122, 38%, 40%)',
      light: 'hsl(122, 38%, 50%)',
    }
  },
  {
    type: 'salary',
    content: '薪資',
    icon: <RiMoneyDollarBoxFill />,
    color: {
      dark: 'hsl(45, 100%, 40%)',
      light: 'hsl(45, 100%, 50%)',
    }
  },
  {
    type: 'bonus',
    content: '獎金',
    icon: <RiMoneyDollarCircleFill />,
    color: {
      dark: 'hsl(14, 100%, 40%)',
      light: 'hsl(14, 100%, 50%)',
    }
  },
  {
    type: 'other',
    content: '其它',
    icon: <BsQuestionCircleFill />,
    color: {
      dark: 'hsl(0, 0%, 40%)',
      light: 'hsl(0, 0%, 50%)',
    }
  },
];

export const getAllTypeData = () => {
  return typeList;
};

export const getCustomeTypeData = (keys) => {
  return typeList.map((item) => {
    let filteredItem = {};
    keys.forEach((key) => {
      if (key in item) {
        filteredItem[key] = item[key];
      }
    });
    return filteredItem;
  });
};

export const getTypeData = (target, value) => {
  return typeList.filter((item) => item[target] === value)[0];
};