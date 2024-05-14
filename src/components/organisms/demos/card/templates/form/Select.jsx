'use client';

import { useFormContext } from 'react-hook-form';

import { Icon, Select } from '@/components/atoms';
import { FormControl } from '@/components/molecules/form';
import { useChangeKeyWhenFalsy, useFormField } from '@/hooks';
import { cn, normId } from '@/utils';

const DemosCardOrganismTemplatesFormSelect = ({
  placeholder,
  icon,
  items,
  ...props
}) => {
  const { name } = useFormField(),
    { register, watch } = useFormContext();

  const currValue = watch(name),
    { onChange, ref, ...rest } = register(name);

  const key = useChangeKeyWhenFalsy(currValue);

  return (
    <Select.Root
      key={key}
      onValueChange={(value) => onChange({ target: { name, value } })}
      {...rest}
      {...props}
    >
      <FormControl customRegister={{ ref }}>
        <Select.Trigger>
          <Select.Value placeholder={placeholder} />

          <div className='size-3.5'>
            <Icon
              {...icon}
              className={cn('group-data-open:animate-[--anim]', icon.animation)}
            />
          </div>
        </Select.Trigger>
      </FormControl>

      <Select.Content>
        <Select.Viewport>
          {items?.map((data) => (
            <Select.Item.Root
              key={data.value}
              value={normId(data.value)}
            >
              <Select.Item.Indicator>
                <Icon {...data.icon} />
              </Select.Item.Indicator>

              <Select.Item.Text>{data.label}</Select.Item.Text>
            </Select.Item.Root>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default DemosCardOrganismTemplatesFormSelect;
