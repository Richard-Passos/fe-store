import { forwardRef } from 'react';

const SheetActions = ({ className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetActions);
