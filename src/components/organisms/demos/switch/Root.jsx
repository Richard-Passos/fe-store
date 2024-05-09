import { Label, Switch } from '@/components/atoms';
import { cn } from '@/utils';

const SwitchDemo = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      <Label htmlFor='airplane-mode'>Airplane mode</Label>

      <Switch.Root id='airplane-mode'>
        <Switch.Thumb />
      </Switch.Root>
    </div>
  );
};

export default SwitchDemo;
