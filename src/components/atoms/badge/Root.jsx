import { Slot } from '@radix-ui/react-slot';

import badge from './variants';

const Badge = ({ asChild, color, variant, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={badge ({ color, variant, className })}
      {...props}
    />
  );
};

export default Badge;
