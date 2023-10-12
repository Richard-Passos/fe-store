import { cn } from '@/utils';

const DropdownMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn('text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};

export default DropdownMenuShortcut;
