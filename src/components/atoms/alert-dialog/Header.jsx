import { forwardRef } from 'react';

const AlertDialogHeader = (props, ref) => {
  return (
    <header
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogHeader);
