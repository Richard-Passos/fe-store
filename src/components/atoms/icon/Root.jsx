import { forwardRef } from 'react';
import Svg from 'react-inlinesvg';

import { cn } from '@/utils';

const AtomsIcon = ({ className, ...props }, ref) => {
  return (
    <Svg
      className={cn('size-full *:fill-current *:stroke-transparent', className)}
      innerRef={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomsIcon);
