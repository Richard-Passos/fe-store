import useHeaderContext from './useHeader';
import useToggleContext from './useToggle';

const hooksContexts = {
  useHeader: useHeaderContext,
  useToggle: useToggleContext
};

export default hooksContexts;
export { hooksContexts, useHeaderContext, useToggleContext };
