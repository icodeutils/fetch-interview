import React from 'react';

interface CardHeaderProps {
  coin_available: string | number;
  percent_complete: number;
  description: string;
  link_view: string;
  updated: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  coin_available,
  percent_complete,
  description,
  link_view,
  updated,
}) => {
  return <div className='relative'>
    <div className="absolute bg-white inset-x-2 p-4 bg-[url('/src/assets/svg/price_show.svg')] shadow-xl rounded-lg">
      <div>
        <span className='text-gray-400'>Available Coin balance</span>
      </div>
      <div className='my-4'>
        <span className='text-3xl'>{coin_available}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200 my-2">
        <div className="bg-blue-600 h-1.5 rounded-full" style={{ "width": `${percent_complete}%` }}></div>
      </div>
      <div>
        <p className='text-gray-400 py-4'>{description}</p>
      </div>
      <div>
        <div className='py-4 flex'>
          <a href={link_view} className='text-blue-600'>View tier benefits</a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#0062FF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
          </svg>
        </div>
        <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-xl dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-md py-4 px-2 mb-2">My Coupons</button>
      </div>
      <div className='text-center py-2'>
        <span className='text-gray-400'>Updated : {updated}</span>
      </div>
    </div>
  </div>
}

export default CardHeader;
