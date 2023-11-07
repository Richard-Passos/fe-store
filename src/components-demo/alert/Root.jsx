import { InfoCircledIcon } from '@radix-ui/react-icons';

import { ListComponent } from '@/components';
import { Alert } from '@/components/ui';
import { alertStyles } from '@/components/ui/alert';
import variantColors from '@/components/ui/variantColors';

const ALERT_COLOR_VARIANTS = Object.keys(variantColors),
  ALERT_STYLE_VARIANTS = Object.keys(alertStyles);

const ALERT_VARIANTS = ALERT_COLOR_VARIANTS.map((color) =>
  ALERT_STYLE_VARIANTS.map((style) => ({
    color,
    style,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.style.localeCompare(a.style));

const AlertDemo = ({ className, ...props }) => {
  return (
    <ListComponent {...props}>
      {ALERT_VARIANTS.map((variants) => (
        <ListComponent.Item key={Object.entries(variants).join()}>
          <ListComponent.Subtitle variants={variants} />

          <Alert variants={variants}>
            <Alert.Icon>
              <InfoCircledIcon />
            </Alert.Icon>

            <Alert.Title>Heads up!</Alert.Title>

            <Alert.Description>
              You can add components to your app using the cli.
            </Alert.Description>
          </Alert>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default AlertDemo;
