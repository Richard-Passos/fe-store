import { forwardRef } from 'react';

const DialogActions = ({ className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogActions);
