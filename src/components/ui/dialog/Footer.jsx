import { cn } from '@/utils';

const DialogFooter = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex max-sm:flex-col-reverse sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  );
};

export default DialogFooter;
