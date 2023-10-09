import { Icon } from '@/components';
import { cn } from '@/utils';

const CommandIcon = ({ className, ...props }) => {
  return (
    <Icon
      className={cn('mr-2 h-4 w-4 shrink-0 opacity-50', className)}
      name='search'
      {...props}
    />
  );
};

export default CommandIcon;
