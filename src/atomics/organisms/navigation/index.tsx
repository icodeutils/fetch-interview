import React from 'react';

import NavigationBlock from './block';

import { ReactComponent as HomeIcon } from "../../../assets/svg/navigation/home.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/svg/navigation/notification.svg";
import { ReactComponent as WalletIcon } from "../../../assets/svg/navigation/wallet.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/navigation/profile.svg";

import { NavigationBlockProps } from './constants';

const DATA: NavigationBlockProps[] = [
  {
    IconComponent: HomeIcon,
  },
  {
    IconComponent: NotificationIcon,
  },
  {
    IconComponent: WalletIcon,
  },
  {
    IconComponent: ProfileIcon,
  },
];

const Navigation: React.FC = () => {
  return <nav className="fixed bottom-0 inset-x-0 flex justify-between text-sm uppercase font-mono border-t-2 bg-white">
    {
      DATA.map((navBlockItem, index) => <NavigationBlock
        key={index.toString()}
        IconComponent={navBlockItem.IconComponent}
      />)
    }
  </nav>
}

export default Navigation;
