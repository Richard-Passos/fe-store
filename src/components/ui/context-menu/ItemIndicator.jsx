'use client';

import { ItemIndicator } from '@radix-ui/react-context-menu';

import { cn } from '@/utils';

const ContextMenuItemIndicator = ({ className, ...props }) => {
  return (
    <ItemIndicator
      className={cn(
        'absolute left-4 flex h-3.5 w-3.5 items-center justify-center',
        className,
      )}
      {...props}
    />
  );
};

export default ContextMenuItemIndicator;
