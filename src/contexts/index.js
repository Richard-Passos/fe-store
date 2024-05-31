import ErrorBoundaryContext, { ErrorBoundaryProvider } from './ErrorBoundary';
import ToggleContext, { ToggleProvider } from './Toggle';

const Contexts = {
  ErrorBoundary: ErrorBoundaryContext,
  Toggle: ToggleContext
};

export default Contexts;
export {
  Contexts,
  ErrorBoundaryContext,
  ErrorBoundaryProvider,
  ToggleContext,
  ToggleProvider
};
