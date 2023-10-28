import { Button, Text } from '@/components/ui';
import variantsColor from '@/components/ui/variantsColor';
import { cn } from '@/utils';

const BUTTON_COLOR_VARIANTS = Object.keys(variantsColor),
  BUTTON_VARIANT_VARIANTS = ['filled', 'outline', 'ghost', 'link'],
  BUTTON_SIZE_VARIANTS = ['lg', 'md', 'sm'];

const BUTTON_VARIANTS = BUTTON_COLOR_VARIANTS.map((color) =>
  BUTTON_VARIANT_VARIANTS.map((variant) =>
    BUTTON_SIZE_VARIANTS.map((size) => ({
      color,
      variant,
      size,
    })),
  ),
)
  .reduce(
    (arr, variantsArr) => [
      ...arr,
      ...variantsArr.reduce((arr, variants) => [...arr, ...variants], []),
    ],
    [],
  )
  .sort((a, b) => a.variant.localeCompare(b.variant))
  .sort((a, b) => a.size.localeCompare(b.size));

const ButtonView = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex flex-wrap justify-center gap-12', className)}
      {...props}
    >
      {BUTTON_VARIANTS.map((variants) => (
        <li
          className='w-full max-w-sm space-y-6 rounded-md bg-muted p-5 shadow-md'
          key={getKeyValue(variants).join()}
        >
          <Title variants={variants} />

          <Button variants={variants}>Button</Button>
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

export default ButtonView;
