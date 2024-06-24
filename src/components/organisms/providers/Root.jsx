import IconProvider from './Icon';
import IntlProvider from './Intl';
import StoreProvider from './Store';
import UiProvider from './Ui';

const OrganismsProviders = ({
  stateProps,
  intlProps,
  uiProps,
  iconProps,
  children
}) => {
  return (
    <StoreProvider {...stateProps}>
      <IntlProvider {...intlProps}>
        <UiProvider {...uiProps}>
          <IconProvider {...iconProps}>{children}</IconProvider>
        </UiProvider>
      </IntlProvider>
    </StoreProvider>
  );
};

export default OrganismsProviders;
