'use client';

import { forwardRef } from 'react';

import { Action } from '@/components/molecules';
import { useHover } from '@/hooks';
import { cn, setRefs } from '@/utils';

const OrganismsHeaderAction = ({ className, ...props }, ref) => {
  const { hovered, ref: innerRef } = useHover();

  return (
    <Action
      className={cn('transition-colors focus-visible:outline-black', className)}
      color='black'
      ref={setRefs(ref, innerRef)}
      variant={hovered ? 'filled' : 'outline'}
      {...props}
    />
  );
};

export default forwardRef(OrganismsHeaderAction);
