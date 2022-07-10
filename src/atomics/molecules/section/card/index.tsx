import React from 'react';
import { ReactComponent as TimeIcon } from '../../../../assets/svg/content/time.svg';

interface CardProps {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>,
  price_coin: number;
  description: string;
  status: boolean;
}

const Card: React.FC<CardProps> = ({
  IconComponent,
  price_coin,
  description,
  status,
}) => {
  return <div className='max-w-min shadow-md min-h-[240px]'>
    <div>
      <IconComponent />
    </div>
    <div className='p-4'>
      <div className='flex items-center text-left font-bold'>
        {!status && <TimeIcon style={{ marginRight: '4px' }} />}
        <p className={`${status ? "text-blue-600" : "text-gray-600"} py-2`}>{price_coin} Coins</p>
      </div>
      <div className='text-left'>
        <p className='text-gray-400'>{description}</p>
      </div>
      {
        !status && <div>
          <p className='text text-left text-blue-600'>Insufficient coins</p>
        </div>
      }
    </div>
  </div>
}

export default Card;
