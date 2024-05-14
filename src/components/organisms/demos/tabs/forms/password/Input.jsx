'use client';

import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useState } from 'react';

import { Input } from '@/components/atoms';

const TabsDemoPasswordFormInput = (props, ref) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleIsShowing = () => setIsShowing((state) => !state);

  return (
    <div className='relative flex w-full items-center'>
      <Input
        placeholder={isShowing ? 'password' : '********'}
        ref={ref}
        variant={!isShowing && 'password'}
        {...props}
      />

      <Slot
        className='absolute right-4 h-3.5 w-3.5'
        onClick={toggleIsShowing}
      >
        {isShowing ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </Slot>
    </div>
  );
};

export default forwardRef(TabsDemoPasswordFormInput);
