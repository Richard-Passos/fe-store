import { Slot } from '@radix-ui/react-slot';

import variants from './variants';

const Section = ({ asChild, color, variant, size, className, ...props }) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={variants({ color, variant, size, className })}
      {...props}
    />
  );
};

export default Section;
