import React from 'react';

import SectionItem from '../../molecules/section';

import { ReactComponent as Petrol } from '../../../assets/svg/content/petrol.svg';
import { ReactComponent as RentalRate } from '../../../assets/svg/content/rental_rate.svg';
import { ReactComponent as FoodBeverage } from '../../../assets/svg/content/food_and_beverage.svg';

const SECTION_DATA: {
  title: string;
  data: {
    IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }>,
    price_coin: number;
    description: string;
    status: boolean;
  }[]
}[] = [
    {
      title: 'Pretrol',
      data: [
        {
          IconComponent: Petrol,
          price_coin: 15,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          status: true,
        },
        {
          IconComponent: Petrol,
          price_coin: 1000,
          description: '70% discount top-up on your Shell Petrol Card',
          status: false,
        }, {
          IconComponent: Petrol,
          price_coin: 15,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          status: true,
        },
      ]
    },
    {
      title: 'Rental Rebate',
      data: [
        {
          IconComponent: RentalRate,
          price_coin: 20,
          description: 'Get $20 Rental rebate',
          status: true,
        },
        {
          IconComponent: RentalRate,
          price_coin: 15,
          description: 'Get $500 Rental rebate',
          status: true,
        }, {
          IconComponent: RentalRate,
          price_coin: 15,
          description: 'Get $20 Rental rebate',
          status: true,
        },
      ]
    },
    {
      title: 'Food and Beverage',
      data: [
        {
          IconComponent: FoodBeverage,
          price_coin: 25,
          description: 'NTUC Fairprice $50 Voucher',
          status: true,
        },
        {
          IconComponent: FoodBeverage,
          price_coin: 5,
          description: 'Free Cold Stone Sundae at any flavour!',
          status: true,
        }, {
          IconComponent: FoodBeverage,
          price_coin: 15,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          status: true,
        },
      ]
    }
  ]

const Content = () => {
  return <div className='relative top-52 mb-72 p-2'>
    {
      SECTION_DATA.map(section => <SectionItem title={section.title} section_data_list={section.data} />)
    }
  </div>
}

export default Content;
