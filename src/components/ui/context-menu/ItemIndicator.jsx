'use client';

import { ItemIndicator } from '@radix-ui/react-context-menu';

import { cn } from '@/utils';

const ContextMenuItemIndicator = ({ className, ...props }) => {
  return (
    <ItemIndicator
      className={cn(
        'absolute left-3.5 flex aspect-square w-3.5 items-center justify-center',
        className,
      )}
      {...props}
    />
  );
};

export default ContextMenuItemIndicator;
