import { Image } from '@mantine/core';
import NextImage from 'next/image';
import { forwardRef } from 'react';

const AtomsImage = (props, ref) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      component={NextImage}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomsImage);
