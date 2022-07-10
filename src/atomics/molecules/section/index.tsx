import React from 'react';
import Card from './card';

interface SectionItemProps {
  title: string;
  section_data_list: {
    IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }>,
    price_coin: number;
    description: string;
    status: boolean;
  }[];
};

const SectionItem: React.FC<SectionItemProps> = ({
  title,
  section_data_list,
}) => {
  return <div>
    <div className='text-left p-2'>
      <span className="font-bold py-1 text-black text-lg">{title}</span>
    </div>
    <div className='flex gap-x-2 overflow-auto p-2'>
      {
        section_data_list.map((data, index) => <Card
          key={index.toString()}
          IconComponent={data.IconComponent}
          price_coin={data.price_coin}
          description={data.description}
          status={data.status}
        />)
      }
    </div>
  </div>
}

export default SectionItem;
