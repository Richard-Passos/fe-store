'use client';

import { Anchor } from '@mantine/core';
import { forwardRef } from 'react';

import Link from './Unstyled';

const AtomsLink = (props, ref) => {
  return (
    <Anchor
      component={Link}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomsLink);
