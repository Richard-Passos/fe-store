import GlobalIconProvider from './Icon';
import GlobalStateProvider from './State';
import GlobalThemeProvider from './Theme';
import GlobalToastProvider from './Toast';
import GlobalTooltipProvider from './Tooltip';

const GlobalProviders = {
  Icon: GlobalIconProvider,
  State: GlobalStateProvider,
  Theme: GlobalThemeProvider,
  Toast: GlobalToastProvider,
  Tooltip: GlobalTooltipProvider
};

export default GlobalProviders;
export {
  GlobalIconProvider,
  GlobalStateProvider,
  GlobalThemeProvider,
  GlobalToastProvider,
  GlobalTooltipProvider
};
