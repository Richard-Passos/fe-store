import { forwardRef } from 'react';
import Svg from 'react-inlinesvg';

import icon from './variants';

const Icon = ({ color, className, ...props }, ref) => {
  return (
    <Svg
      className={icon({ color, className })}
      innerRef={ref}
      {...props}
    />
  );
};

export default forwardRef(Icon);
