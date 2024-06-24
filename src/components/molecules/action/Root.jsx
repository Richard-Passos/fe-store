import { forwardRef } from 'react';

import { ActionIcon, Button } from '@/components/atoms';
import UnstyledLink from '@/components/atoms/link/Unstyled';

const MoleculesAction = ({ href, isIconOnly, ...props }, ref) => {
  const Tag = isIconOnly ? ActionIcon : Button;

  return (
    <Tag
      component={href && UnstyledLink}
      href={href}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesAction);
