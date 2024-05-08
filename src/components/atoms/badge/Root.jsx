import { Slot } from '@radix-ui/react-slot';

import variants from './variants';

const Badge = ({ asChild, color, type, size, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={variants({ color, type, size, className })}
      {...props}
    />
  );
};

export default Badge;
