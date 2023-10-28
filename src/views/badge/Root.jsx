import { Badge, Text } from '@/components/ui';
import variantsColor from '@/components/ui/variantsColor';
import { cn } from '@/utils';

const BADGE_COLOR_VARIANTS = Object.keys(variantsColor),
  BADGE_VARIANT_VARIANTS = ['filled', 'outline', 'ghost'];

const BADGE_VARIANTS = BADGE_COLOR_VARIANTS.map((color) =>
  BADGE_VARIANT_VARIANTS.map((variant) => ({
    color,
    variant,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => a.variant.localeCompare(b.variant));

const BadgeView = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex flex-wrap justify-center gap-12', className)}
      {...props}
    >
      {BADGE_VARIANTS.map((variants) => (
        <li
          className='w-full max-w-xs space-y-6 rounded-md bg-muted p-5 shadow-md'
          key={getKeyValue(variants).join()}
        >
          <Title variants={variants} />

          <Badge variants={variants}>Badge</Badge>
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
export default BadgeView;
