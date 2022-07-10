import React from 'react';

import { ReactComponent as IconBack } from '../../../assets/svg/header/icon_back.svg';
import CardHeader from './card';

const PageHeader: React.FC = () => {
  return <div className='p-4 bg-[#171725] h-96 overflow-visible'>
    <div className='pb-4'>
      <div className='py-4'>
        <IconBack />
      </div>
      <h2 className='text-white text-2xl font-bold'>Silver Tier</h2>
      <p className='text-gray-400 py-2'>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
    </div>
    <CardHeader
      coin_available={340}
      percent_complete={45}
      description="You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier."
      link_view="#"
      updated="02/11/2021"
    />
  </div>
}

export default PageHeader;
