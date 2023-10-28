import { Terminal } from 'lucide-react';

import { Alert, Text } from '@/components/ui';
import variantsColor from '@/components/ui/variantsColor';
import { cn } from '@/utils';

const ALERT_COLOR_VARIANTS = Object.keys(variantsColor),
  ALERT_VARIANT_VARIANTS = ['filled', 'outline'];

const ALERT_VARIANTS = ALERT_COLOR_VARIANTS.map((color) =>
  ALERT_VARIANT_VARIANTS.map((variant) => ({
    color,
    variant,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => a.variant.localeCompare(b.variant));

const AlertView = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex flex-wrap justify-center gap-12', className)}
      {...props}
    >
      {ALERT_VARIANTS.map((variants) => (
        <li
          className='space-y-6 rounded-md bg-muted p-5 shadow-md'
          key={getKeyValue(variants).join()}
        >
          <Title variants={variants} />

          <Alert variants={variants}>
            <Alert.Icon>
              <Terminal />
            </Alert.Icon>

            <Alert.Title>Heads up!</Alert.Title>

            <Alert.Description>
              You can add components to your app using the cli.
            </Alert.Description>
          </Alert>
        </li>
      ))}
    </ul>
  );
};

const getKeyValue = (obj) => Object.entries(obj);

const Title = ({ variants, className, ...props }) => {
  return (
    <Text.Title
      className={cn('text-base font-medium', className)}
      {...props}
    >
      {getKeyValue(variants).map(([key, value], i, arr) => (
        <>
          <span className='first:capitalize'>{key}</span>:{' '}
          <span className='text-muted-content'>{value.toString()}</span>
          {i < arr.length - 1 && ' - '}
        </>
      ))}
    </Text.Title>
  );
};

export default AlertView;
