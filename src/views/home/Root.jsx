import { Command } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <main
      className={cn(className)}
      {...props}
    >
      <Command />
    </main>
  );
};

export default Root;
