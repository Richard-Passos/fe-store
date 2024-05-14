'use client';

import { Content } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { contextMenuContent } from './variants';

const ContextMenuContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      className={contextMenuContent({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuContent);
