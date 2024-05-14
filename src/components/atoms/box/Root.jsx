import { Slot } from '@radix-ui/react-slot';

import box from './variants';

const Box = ({ asChild, color, variant, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={box({ color, variant, className })}
      {...props}
    />
  );
};

export default Box;
