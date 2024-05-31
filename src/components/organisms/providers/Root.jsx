import IconProvider from './Icon';
import StoreProvider from './Store';
import UiProvider from './Ui';

const OrganismsProviders = ({ stateProps, uiProps, iconProps, children }) => {
  return (
    <StoreProvider {...stateProps}>
      <UiProvider {...uiProps}>
        <IconProvider {...iconProps}>{children}</IconProvider>
      </UiProvider>
    </StoreProvider>
  );
};

export default OrganismsProviders;
