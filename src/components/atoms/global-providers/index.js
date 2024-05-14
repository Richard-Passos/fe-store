import GlobalIconProvider from './Icon';
import GlobalStateProvider from './State';
import GlobalThemeProvider from './Theme';

const GlobalProviders = {
  Icon: GlobalIconProvider,
  State: GlobalStateProvider,
  Theme: GlobalThemeProvider
};

export default GlobalProviders;
export { GlobalIconProvider, GlobalStateProvider, GlobalThemeProvider };
