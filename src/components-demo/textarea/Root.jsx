import { Textarea } from '@/components/ui';
import { cn } from '@/utils';

const TextareaDemo = ({ className, ...props }) => {
  return (
    <Textarea
      className={cn('max-w-sm', className)}
      placeholder='Type your message here.'
      {...props}
    />
  );
};

export default TextareaDemo;
