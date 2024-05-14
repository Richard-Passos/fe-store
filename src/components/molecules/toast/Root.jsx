'use client';

import { Root } from '@radix-ui/react-toast';
import { forwardRef, useContext } from 'react';

import { ToastContext, ToastProvider } from '@/contexts';

import variants from './variants';

const Toast = forwardRef(({ color, className, ...props }, ref) => {
  const { state, setState } = useContext(ToastContext);

  return (
    <Root
      className={variants({ color, className })}
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

const ToastWithProvider = ({ duration, ...props }, ref) => {
  return (
    <ToastProvider value={duration}>
      <Toast
        ref={ref}
        {...props}
      />
    </ToastProvider>
  );
};

export default forwardRef(ToastWithProvider);
