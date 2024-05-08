import { InfoCircledIcon } from '@radix-ui/react-icons';

import colorVariants from '@/components/colorVariants';
import { Alert, ListComponent } from '@/components/molecules';
import { alertTypes } from '@/components/molecules/alert';

const ALERT_COLORS = Object.keys(colorVariants),
  ALERT_TYPES = Object.keys(alertTypes);

const ALERT = ALERT_COLORS.map((color) =>
  ALERT_TYPES.map((type) => ({
    color,
    type
  }))
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.type.localeCompare(a.type));

const AlertDemo = (props) => {
  return (
    <ListComponent.Root {...props}>
      {ALERT.map((variants) => (
        <ListComponent.Item key={Object.entries(variants).join()}>
          <ListComponent.Subtitle variants={variants} />

          <Alert.Root {...variants}>
            <Alert.Icon>
              <InfoCircledIcon />
            </Alert.Icon>

            <Alert.Title>Heads up!</Alert.Title>

            <Alert.Description>
              You can add components to your app using the cli.
            </Alert.Description>
          </Alert.Root>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default AlertDemo;
