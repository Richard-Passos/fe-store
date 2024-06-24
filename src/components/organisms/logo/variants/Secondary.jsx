import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { cn } from '@/utils';

const OrganismsLogoVariantsSecondary = (
  { className, icon, label, ...props },
  ref
) => {
  return (
    <Action
      className={cn(
        'data-[position=left]:*:*:h-2/3 data-[position=right]:*:*:h-2/3',
        className
      )}
      leftSection={<Icon src={icon} />}
      ref={ref}
      size='md'
      {...props}
    >
      {label}
    </Action>
  );
};

export default forwardRef(OrganismsLogoVariantsSecondary);
