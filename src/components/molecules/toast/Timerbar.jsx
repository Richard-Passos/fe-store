'use client';

import { useContext } from 'react';

import { Timerbar } from '@/components/atoms';
import { ToastContext } from '@/contexts';
import { cn } from '@/utils';

const ToastTimerbar = ({ className, ...props }) => {
  const { state, duration } = useContext(ToastContext);

  return (
    <Timerbar.Root
      className={cn('absolute bottom-0 left-0', className)}
      color='inherit'
      duration={duration}
      isPaused={state.isPaused}
      size='xs'
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar.Root>
  );
};

export default ToastTimerbar;
