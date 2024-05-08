import { ListComponent } from '@/components/molecules';
import { Image } from '@/components/atoms';

const IMAGE = [
  {
    src: '/images/demo.png',
    alt: 'A road winding through a forest near the ocean.',
    height: 902,
    width: 600,
  },
  {
    src: '/images/demo.png',
    alt: '',
    height: 902,
    width: 600,
  },
  { src: '' },
];

const ImageDemo = (props) => {
  return (
    <ListComponent.Root {...props}>
      {IMAGE.map(({ width = 0, height = 0, ...variants }, i) => (
        <ListComponent.Item key={Object.entries(variants).join()}>
          <ListComponent.Subtitle variants={variants} />

          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            className='rounded-sm'
            height={height}
            priority={i === 0}
            width={width}
            {...variants}
          />
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default ImageDemo;
