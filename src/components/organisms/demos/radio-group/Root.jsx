import { DotFilledIcon } from '@radix-ui/react-icons';

import { Label } from '@/components/atoms';
import { RadioGroup } from '@/components/molecules';
import { cn } from '@/utils';

const RadioGroupDemo = (props) => {
  return (
    <RadioGroup.Root
      defaultValue='comfortable'
      {...props}
    >
      <RadioGroupItem value='default'>Default</RadioGroupItem>

      <RadioGroupItem value='comfortable'>Comfortable</RadioGroupItem>

      <RadioGroupItem value='compact'>Compact</RadioGroupItem>
    </RadioGroup.Root>
  );
};

const RadioGroupItem = ({ className, value, children, ...props }) => {
  return (
    <div
      className={cn('flex items-center gap-xs', className)}
      {...props}
    >
      <RadioGroup.Item
        id={value}
        value={value}
      >
        <RadioGroup.Indicator className='h-full w-full'>
          <DotFilledIcon />
        </RadioGroup.Indicator>
      </RadioGroup.Item>

      <Label htmlFor={value}>{children}</Label>
    </div>
  );
};

export default RadioGroupDemo;
