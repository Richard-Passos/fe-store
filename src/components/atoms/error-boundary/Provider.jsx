import { ErrorProvider } from '@/contexts';

const ErrorBoundaryProvider = async ({ value = {}, ...props }) => {
  return (
    <ErrorProvider
      value={value}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;
