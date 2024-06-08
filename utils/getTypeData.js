import { PiHamburgerFill, PiShoppingCartFill, PiSignatureFill } from "react-icons/pi";
import { IoCarSport, IoGameController, IoCellular, IoFitness } from "react-icons/io5";
import { BsSuitcase2Fill, BsQuestionCircleFill } from "react-icons/bs";
import { MdMedicalServices } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { RiSmartphoneFill, RiMoneyDollarBoxFill, RiMoneyDollarCircleFill } from "react-icons/ri";

export const typeList = [
  {
    type: '飲食',
    icon: <PiHamburgerFill />,
    className: 'food',
  },
  {
    type: '交通',
    icon: <IoCarSport />,
    className: 'traffic',
  },
  {
    type: '購物',
    icon: <PiShoppingCartFill />,
    className: 'shopping',
  },
  {
    type: '娛樂',
    icon: <IoGameController />,
    className: 'entertainment',
  },
  {
    type: '旅遊',
    icon: <BsSuitcase2Fill />,
    className: 'travel',
  },
  {
    type: '醫療',
    icon: <MdMedicalServices />,
    className: 'medical',
  },
  {
    type: '保險',
    icon: <PiSignatureFill />,
    className: 'insurance',
  },
  {
    type: '學費',
    icon: <HiAcademicCap />,
    className: 'tuition',
  },
  {
    type: '房租',
    icon: <TiHome />,
    className: 'rent',
  },
  {
    type: '網路費',
    icon: <IoCellular />,
    className: 'internet',
  },
  {
    type: '手機費',
    icon: <RiSmartphoneFill />,
    className: 'phone',
  },
  {
    type: '運動',
    icon: <IoFitness />,
    className: 'sports',
  },
  {
    type: '薪資',
    icon: <RiMoneyDollarBoxFill />,
    className: 'salary',
  },
  {
    type: '獎金',
    icon: <RiMoneyDollarCircleFill />,
    className: 'bonus',
  },
  {
    type: '其它',
    icon: <BsQuestionCircleFill />,
    className: 'other',
  },
];

export const getTypeData = (type) => {
  return typeList.filter((item) => item.type === type)[0];
};