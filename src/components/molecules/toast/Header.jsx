import { cn } from '@/utils';

const ToastHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn('max-sm:pr-6', className)}
      {...props}
    />
  );
};

export default ToastHeader;
