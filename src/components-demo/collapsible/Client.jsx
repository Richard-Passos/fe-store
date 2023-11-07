'use client';

import { useState } from 'react';

import { Collapsible } from '@/components/ui/collapsible';
import { cn } from '@/utils';

const CollapsibleDemoClient = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      className={cn('w-full max-w-sm space-y-2', className)}
      onOpenChange={setIsOpen}
      open={isOpen}
      {...props}
    />
  );
};

export default CollapsibleDemoClient;
