'use client';

import { Root } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { ToastProvider } from '@/contexts';
import { useToast } from '@/hooks';

const ToastRoot = forwardRef((props, ref) => {
  const { state, setState } = useToast();

  return (
    <Root
      onOpenChange={(isOpen) => setState((state) => ({ ...state, isOpen }))}
      onPause={() => setState((state) => ({ ...state, isPaused: true }))}
      onResume={() => setState((state) => ({ ...state, isPaused: false }))}
      open={state.isOpen}
      ref={ref}
      {...props}
    />
  );
});
ToastRoot.displayName = 'ToastRoot';

const ToastRootWithProvider = ({ duration = 5000, value, ...props }, ref) => {
  return (
    <ToastProvider value={{ duration, ...value }}>
      <ToastRoot
        ref={ref}
        {...props}
      />
    </ToastProvider>
  );
};

export default forwardRef(ToastRootWithProvider);
