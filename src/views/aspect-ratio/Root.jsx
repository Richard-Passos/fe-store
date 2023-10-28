import { AspectRatio, Image, Text } from '@/components/ui';
import { cn } from '@/utils';

const ASPECT_RATIO_VARIANTS = [
  { ratio: 16 / 9 },
  { ratio: 4 / 3 },
  { ratio: 3 / 2 },
  { ratio: 5 / 3 },
  { ratio: 5 / 4 },
  { ratio: 1 },
];

const AspectRatioView = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex w-full flex-wrap justify-center gap-12', className)}
      {...props}
    >
      {ASPECT_RATIO_VARIANTS.map((variants) => (
        <li
          className='h-fit w-full max-w-lg space-y-6 rounded-md bg-muted p-5 shadow-md'
          key={getKeyValue(variants).join()}
        >
          <Title variants={variants} />

          <AspectRatio {...variants}>
            <Image
              alt='A road winding through a forest near the ocean.'
              className='rounded-sm object-cover'
              fill
              priority
              quality={100}
              src='/images/demo.png'
            />
          </AspectRatio>
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
          <span className='text-muted-content'>
            {key === 'ratio'
              ? value.toString().replace(/([.]\d\d).*/, '$1') + ':1'
              : value.toString()}
          </span>
          {i < arr.length - 1 && ' - '}
        </>
      ))}
    </Text.Title>
  );
};

export default AspectRatioView;
