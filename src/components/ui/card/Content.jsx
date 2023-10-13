import { forwardRef } from 'react';

const CardContent = (props, ref) => {
  return (
    <section
      aria-label='Content'
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardContent);
