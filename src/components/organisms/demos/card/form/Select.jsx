'use client';

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { useFormContext } from 'react-hook-form';

import { Select } from '@/components/atoms';
import { FormControl } from '@/components/molecules/form';
import { useChangeKeyWhenFalsy, useFormField } from '@/hooks';

const CardDemoFormSelect = (props) => {
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
          <Select.Value placeholder='Select a framework...' />

          <Select.Icon
            asChild
            className='transition-transform duration-300 group-data-open:rotate-180'
          >
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
      </FormControl>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            <SelectItem value='Next.js'>Next.js</SelectItem>

            <SelectItem value='SvelteKit'>SvelteKit</SelectItem>

            <SelectItem value='Astro'>Astro</SelectItem>

            <SelectItem value='Nuxt.js'>Nuxt.js</SelectItem>
          </Select.Viewport>

          <Select.ScrollButton.Up>
            <ChevronUpIcon className='h-3.5 w-3.5' />
          </Select.ScrollButton.Up>

          <Select.ScrollButton.Down>
            <ChevronDownIcon className='h-3.5 w-3.5' />
          </Select.ScrollButton.Down>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = ({ children, ...props }) => {
  return (
    <Select.Item.Root {...props}>
      <Select.Item.Indicator>
        <CheckIcon />
      </Select.Item.Indicator>

      <Select.Item.Text>{children}</Select.Item.Text>
    </Select.Item.Root>
  );
};

export default CardDemoFormSelect;
