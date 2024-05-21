import { forwardRef } from 'react';

const AlertDialogActions = (props, ref) => {
  return (
    <section
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogActions);
