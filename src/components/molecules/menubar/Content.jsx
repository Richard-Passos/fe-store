'use client';

import { Content } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { menubarContent } from './variants';

const MenubarContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      align='start'
      alignOffset={-4}
      className={menubarContent({ color, className })}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(MenubarContent);
