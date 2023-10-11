import { cn } from '@/utils';

const DialogHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'flex flex-col space-y-1.5 max-sm:text-center',
        className,
      )}
      {...props}
    />
  );
};

export default DialogHeader;
