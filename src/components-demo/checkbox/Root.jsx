import { CheckIcon } from '@radix-ui/react-icons';

import { Checkbox, Label } from '@/components/atoms';
import { cn } from '@/utils';

const CheckboxDemo = ({ className, ...props }) => {
  return (
    <Label
      className={cn('inline-flex items-center gap-4', className)}
      {...props}
    >
      <Checkbox.Root>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <span>Accept terms and conditions.</span>
    </Label>
  );
};

export default CheckboxDemo;
