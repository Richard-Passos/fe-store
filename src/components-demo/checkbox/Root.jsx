import { CheckIcon } from '@radix-ui/react-icons';

import { Checkbox, Label } from '@/components/ui';
import { cn } from '@/utils';

const CheckboxDemo = ({ className, ...props }) => {
  return (
    <Label
      className={cn('inline-flex items-center gap-4', className)}
      {...props}
    >
      <Checkbox>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <span>Accept terms and conditions.</span>
    </Label>
  );
};

export default CheckboxDemo;
