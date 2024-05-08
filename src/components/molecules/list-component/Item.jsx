import { cn } from '@/utils';

const ListComponentItem = ({ className, ...props }) => {
  return (
    <li
      className={cn(
        'h-fit w-full max-w-md space-y-6 rounded-md bg-active p-sm shadow-md',
        className
      )}
      {...props}
    />
  );
};

export default ListComponentItem;
