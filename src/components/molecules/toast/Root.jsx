'use client';

import { Root } from '@radix-ui/react-toast';
import { forwardRef, useContext } from 'react';

import box from '@/components/atoms/box/variants';
import { ToastContext, ToastProvider } from '@/contexts';
import { cn } from '@/utils';

const Toast = forwardRef(({ color, className, ...props }, ref) => {
  const { state, setState } = useContext(ToastContext);

  return (
    <Root
      className={box({
        color,
        className: cn(
          'group max-w-md shrink-0 !touch-pan-y overflow-hidden data-closed:animate-out data-closed:fade-out data-closed:slide-out-to-right-full data-open:animate-in data-open:slide-in-from-top-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=cancel]:transition-transform max-sm:w-full sm:flex-row sm:items-center sm:data-open:slide-in-from-bottom-full',
          className
        )
      })}
      onOpenChange={(isOpen) => setState((state) => ({ ...state, isOpen }))}
      onPause={() => setState((state) => ({ ...state, isPaused: true }))}
      onResume={() => setState((state) => ({ ...state, isPaused: false }))}
      open={state.isOpen}
      ref={ref}
      {...props}
    />
  );
});
Toast.displayName = 'Toast';

const ToastWithProvider = ({ duration, value, ...props }, ref) => {
  return (
    <ToastProvider value={{ duration: duration ?? 5000, ...value }}>
      <Toast
        ref={ref}
        {...props}
      />
    </ToastProvider>
  );
};

export default forwardRef(ToastWithProvider);
