import { cn } from '@/utils';

const ToastHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
};

export default ToastHeader;
