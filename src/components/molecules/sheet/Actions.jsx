import { cn } from '@/utils';

const SheetActions = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex justify-end gap-2 max-sm:flex-col-reverse',
        className
      )}
      {...props}
    />
  );
};

export default SheetActions;
