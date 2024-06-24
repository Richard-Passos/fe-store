import { NavLink } from '@mantine/core';
import { forwardRef } from 'react';

import UnstyledLink from '@/components/atoms/link/Unstyled';

const MoleculesNavLink = (props, ref) => {
  return (
    <NavLink
      component={UnstyledLink}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesNavLink);
