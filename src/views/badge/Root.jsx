import { Badge } from '@/components/ui';
import variantsColor from '@/components/ui/variantsColor';
import { capitalize, cn } from '@/utils';

const BADGE_VARIANTS = [
  ...Object.keys(variantsColor).map((color) => ({ color, variant: 'filled' })),
  ...Object.keys(variantsColor).map((color) => ({ color, variant: 'outline' })),
  ...Object.keys(variantsColor).map((color) => ({ color, variant: 'ghost' })),
];

const DialogView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds flex-col items-center justify-center gap-24 py-48',
        className,
      )}
      {...props}
    >
      {BADGE_VARIANTS.map(({ color, variant }) => (
        <section
          className='w-full max-w-xs space-y-6'
          key={color + variant}
        >
          <h2 className='font-medium'>
            {capitalize(color)} - {variant}
          </h2>

          <Badge variants={{ color, variant }}>Badge</Badge>
        </section>
      ))}
    </main>
  );
};

export default DialogView;
