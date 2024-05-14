import { useContext } from 'react';

import { Timerbar } from '@/components/atoms';
import { ToastContext } from '@/contexts';
import { cn } from '@/utils';

const ToastTimerbar = ({ variant, className, ...props }) => {
  const { state, duration } = useContext(ToastContext);

  return (
    <Timerbar.Root
      className={cn(
        'absolute bottom-0 left-0',
        variant !== 'outline' && '[--root-main:--content]',
        className
      )}
      color='inherit'
      duration={duration}
      isPaused={state.isPaused}
      size='xs'
      variant={variant}
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar.Root>
  );
};

export default ToastTimerbar;
