import { cn } from '@/utils';

const AlertHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
};

export default AlertHeader;