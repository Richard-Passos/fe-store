import { forwardRef } from 'react';

import variants from './variants';

const Alert = ({ color, type, className, ...props }, ref) => {
  return (
    <section
      className={variants({ color, type, className })}
      ref={ref}
      role='alert'
      {...props}
    />
  );
};

export default forwardRef(Alert);
