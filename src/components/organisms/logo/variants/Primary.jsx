import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action } from '@/components/molecules';

const OrganismsLogoVariantsPrimary = ({ icon, label, ...props }, ref) => {
  return (
    <Action
      aria-label={label}
      isIconOnly
      ref={ref}
      size='xl'
      {...props}
    >
      <Icon
        className='size-9/10'
        src={icon}
      />
    </Action>
  );
};

export default forwardRef(OrganismsLogoVariantsPrimary);
