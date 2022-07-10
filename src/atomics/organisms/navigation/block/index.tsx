import React from 'react';
import { NavigationBlockProps } from '../constants';

const NavigationBlock: React.FC<NavigationBlockProps> = ({
  link,
  className,
  IconComponent,
  ...props
}) => {
  return <a href={link} className={`flex w-full py-4 px-3 justify-center ${className}`} {...props}>
    <IconComponent />
  </a>
}

NavigationBlock.defaultProps = {
  link: '#',
  className: '',
}

export default NavigationBlock;
