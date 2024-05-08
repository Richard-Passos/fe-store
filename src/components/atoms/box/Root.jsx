import { Slot } from '@radix-ui/react-slot';

import variants from './variants';

const Box = ({ asChild, color, type, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={variants({ color, type, className })}
      {...props}
    />
  );
};

export default Box;
