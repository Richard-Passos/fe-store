'use client';

import { ItemIndicator } from '@radix-ui/react-context-menu';

import { cn } from '@/utils';

const ContextMenuItemIndicator = ({ className, ...props }) => {
  return (
    <ItemIndicator
      className={cn(className)}
      {...props}
    />
  );
};

export default ContextMenuItemIndicator;
