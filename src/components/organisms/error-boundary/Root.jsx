'use client';

import { forwardRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorBoundaryProvider } from '@/contexts';

const OrganismsErrorBoundary = ErrorBoundary;

const OrganismsErrorBoundaryWithProvider = ({ value, ...props }, ref) => {
  return (
    <ErrorBoundaryProvider value={value}>
      <OrganismsErrorBoundary
        ref={ref}
        {...props}
      />
    </ErrorBoundaryProvider>
  );
};

export default forwardRef(OrganismsErrorBoundaryWithProvider);
