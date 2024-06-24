import { forwardRef } from 'react';

import { Icon, Link, Text } from '@/components/atoms';
import { List } from '@/components/molecules';
import { cn, normKey } from '@/utils';

const rich = {
  p: (chunks) => <Text>{chunks}</Text>,
  strong: (chunks) => <strong>{chunks}</strong>,
  italic: (chunks) => <italic>{chunks}</italic>,
  a: (chunks) => <Link>{chunks}</Link>,
  ul: (chunks) => (
    <List.Root
      className='my-sm pl-md'
      type='unordered'
    >
      {chunks}
    </List.Root>
  ),
  ol: (chunks) => (
    <List.Root
      className='my-sm pl-md'
      type='ordered'
    >
      {chunks}
    </List.Root>
  ),
  li: (chunks) => <List.Item>{chunks}</List.Item>,
  orange: (chunks) => <RichColor color='orange'>{chunks}</RichColor>,
  green: (chunks) => <RichColor color='green'>{chunks}</RichColor>,
  yellow: (chunks) => <RichColor color='yellow'>{chunks}</RichColor>,
  gray: (chunks) => <RichColor color='gray'>{chunks}</RichColor>,
  icon: (src) => (
    <span className='flex size-[1em]'>
      <Icon src={src} />
    </span>
  )
};

const RichColor = forwardRef(({ color, className, ...props }, ref) => {
  color = normKey(color);

  const colors = {
    orange: 'text-orange-filled',
    green: 'text-green-filled',
    yellow: 'text-yellow-filled',
    gray: 'text-gray-filled'
  };

  return (
    <span
      className={cn(
        'mx-2 inline-flex size-[.75em] items-center justify-center text-yellow-filled',
        colors[color],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
RichColor.displayName = 'RichColor';

export default rich;
export { rich };
