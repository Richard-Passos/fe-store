'use client';

import { Separator, Text } from '@/components/ui';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import { TOAST_REMOVE_DELAY_FOR_ANIMATIONS } from '@/hooks/useToast';
import { cn } from '@/utils';

import DeclarativeToasts from './Declarative';
import ImperativeToasts from './imperative';

const TOAST_DURATION = 5000;

const ToastDemo = ({ className, ...props }) => {
  return (
    <ToastProvider
      duration={TOAST_DURATION + TOAST_REMOVE_DELAY_FOR_ANIMATIONS}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-12 px-3 sm:px-12',
          className,
        )}
        {...props}
      >
        <Text className='text-center sm:px-12'>
          Each button shows a Toast when clicked, so... feel free to click
          around.
        </Text>

        <Separator />

        <div className='space-y-6'>
          <Subtitle>Declarative way</Subtitle>

          <DeclarativeToasts />
        </div>

        <Separator />

        <div className='space-y-6'>
          <Subtitle>Imperative way</Subtitle>

          <ImperativeToasts />
        </div>

        <Separator />
      </div>

      <ToastViewport hotkey={['altKey', 'KeyK']} />
    </ToastProvider>
  );
};

const Subtitle = ({ className, ...props }) => {
  return (
    <Text.Subtitle
      className={cn('mx-auto text-center text-2xl', className)}
      {...props}
    />
  );
};

export default ToastDemo;
export { TOAST_DURATION };
