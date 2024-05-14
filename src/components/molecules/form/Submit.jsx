import { forwardRef } from 'react';

import { Button } from '@/components/atoms';

const FormSubmit = (props, ref) => {
  return (
    <Button
      ref={ref}
      type='submit'
      {...props}
    />
  );
};

export default forwardRef(FormSubmit);
