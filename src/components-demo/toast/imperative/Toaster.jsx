'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Timerbar, Toast } from '@/components/ui';
import { useToast } from '@/hooks';
import { cn } from '@/utils';

import { TOAST_DURATION } from '../Root';

const ToastDemoImperativeToaster = () => {
  const { toasts } = useToast(),
    [isPaused, setIsPaused] = useState(false);

  return toasts.map(
    ({ id, title, description, action, variants, ...props }) => (
      <Toast
        key={id}
        onPause={() => setIsPaused(true)}
        onResume={() => setIsPaused(false)}
        variants={variants}
        {...props}
      >
        <Toast.Header>
          {title && <Toast.Title>{title}</Toast.Title>}

          <Toast.Description>{description}</Toast.Description>
        </Toast.Header>

        {action}

        <ToastClose variants={variants} />

        <ToastTimerbar
          pause={isPaused}
          variants={variants}
        />
      </Toast>
    ),
  );
};

const ToastClose = ({ variants, className, ...props }) => {
  const { style } = variants;

  return (
    <Toast.Close
      className={cn(style === 'outline' && 'hover:bg-main/20', className)}
      {...props}
    >
      <Cross2Icon />
    </Toast.Close>
  );
};

const ToastTimerbar = ({ variants, className, ...props }) => {
  const { style } = variants;

  return (
    <Timerbar
      className={cn(
        'absolute bottom-0 left-0',
        style !== 'outline' && '[--main:--content]',
        className,
      )}
      duration={TOAST_DURATION}
      variants={{
        color: 'inherit',
        size: 'xs',
      }}
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar>
  );
};

export default ToastDemoImperativeToaster;
