import { Slot } from '@radix-ui/react-slot';

import variants from './variants';

const Section = ({ asChild, color, type, size, className, ...props }) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={variants({ color, type, size, className })}
      {...props}
    />
  );
};

export default Section;
