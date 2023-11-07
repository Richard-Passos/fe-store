import { Input, Label } from '@/components/ui';
import { cn } from '@/utils';

const LabelDemo = ({ className, ...props }) => {
  return (
    <div
      className={cn('grid grid-cols-4 items-center gap-x-4 gap-y-2', className)}
      {...props}
    >
      <Label
        className='max-sm:col-span-full sm:text-right'
        htmlFor='name'
      >
        First name
      </Label>

      <Input
        className='col-span-full sm:col-span-3'
        id='name'
        placeholder='John Doe'
      />
    </div>
  );
};

export default LabelDemo;
