import { Terminal } from 'lucide-react';

import { Alert } from '@/components/ui';
import variantsColor from '@/components/ui/variantsColor';
import { capitalize, cn } from '@/utils';

const ALERT_VARIANTS = [
  ...Object.keys(variantsColor).map((color) => ({ color, variant: 'filled' })),
  ...Object.keys(variantsColor).map((color) => ({ color, variant: 'outline' })),
];

const AlertView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds flex-col items-center justify-center gap-24 py-48',
        className,
      )}
      {...props}
    >
      {ALERT_VARIANTS.map(({ color, variant }) => (
        <section
          className='space-y-6'
          key={color + variant}
        >
          <h2 className='font-medium'>
            {capitalize(color)} - {variant}
          </h2>

          <Alert variants={{ color, variant }}>
            <Alert.Icon>
              <Terminal />
            </Alert.Icon>

            <Alert.Title>Heads up!</Alert.Title>

            <Alert.Description>
              You can add components to your app using the cli.
            </Alert.Description>
          </Alert>
        </section>
      ))}
    </main>
  );
};

export default AlertView;
