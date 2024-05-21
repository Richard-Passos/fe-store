'use client';

import { useErrorBoundary } from 'react-error-boundary';

import { ErrorView } from '@/components/views';

const ErrorPage = (props) => {
  const data = useErrorBoundary();

  return (
    <ErrorView
      data={data}
      {...props}
    />
  );
};

export default ErrorPage;
