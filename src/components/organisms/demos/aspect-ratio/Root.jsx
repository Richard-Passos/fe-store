import { ListComponent } from '@/components/molecules';
import { AspectRatio, Image } from '@/components/atoms';

const ASPECT_RATIO = [
  { ratio: 16 / 9 },
  { ratio: 4 / 3 },
  { ratio: 3 / 2 },
  { ratio: 5 / 3 },
  { ratio: 5 / 4 },
  { ratio: 1 },
];

const AspectRatioDemo = ({ className, ...props }) => {
  return (
    <ListComponent.Root {...props}>
      {ASPECT_RATIO.map((variants, i) => (
        <ListComponent.Item
          className='max-w-lg'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle
            variants={{
              ...variants,
              ratio:
                variants?.ratio.toString().replace(/(\.\d\d).*/, '$1') + ':1',
            }}
          />

          <AspectRatio {...variants}>
            <Image
              alt='A road winding through a forest near the ocean.'
              className='rounded-sm object-cover'
              fill
              priority={i === 0}
              src='/images/demo.png'
            />
          </AspectRatio>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default AspectRatioDemo;
