'use client';

import { forwardRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorBoundaryProvider } from '@/contexts';

const ErrorBoundaryWithProvider = ({ value, ...props }, ref) => {
  return (
    <ErrorBoundaryProvider value={value}>
      <ErrorBoundary
        ref={ref}
        {...props}
      />
    </ErrorBoundaryProvider>
  );
};

export default forwardRef(ErrorBoundaryWithProvider);
