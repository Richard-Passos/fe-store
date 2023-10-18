import NextImage from 'next/image';
import { forwardRef } from 'react';

const Image = ({ src, alt, ...props }, ref) => {
  const placeholderProps = {
    src: '/images/placeholder.png',
    alt: 'A black and white image with the word image on it.',
    width: 556,
    height: 350,
  };

  props = {
    ref,
    ...props,
    ...(src
      ? {
          src,
          alt: alt || 'Missing alt property.',
        }
      : placeholderProps),
  };

  return <NextImage {...props} />;
};

export default forwardRef(Image);
