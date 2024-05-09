'use client';

import { CaretSortIcon } from '@radix-ui/react-icons';

import { Button, Text } from '@/components/atoms';
import { Collapsible } from '@/components/molecules';
import { cn } from '@/utils';

import CollapsibleClient from './Client';

const CollapsibleDemo = (props) => {
  return (
    <CollapsibleClient {...props}>
      <div className='mb-4 flex items-center justify-between gap-4 px-4'>
        <Text.Title className='text-sm'>
          @peduarte starred 3 repositories
        </Text.Title>

        <Collapsible.Trigger asChild>
          <Button
            className='aspect-square rounded-sm px-0'
            variants={{ size: 'sm', type: 'outline', color: 'inverted' }}
          >
            <CaretSortIcon
              aria-hidden
              className='h-5 w-5'
            />

            <span className='sr-only'>Toggle</span>
          </Button>
        </Collapsible.Trigger>
      </div>

      <Item>
        <Text.Root>@radix-ui/primitives</Text.Root>
      </Item>

      <Collapsible.Content className='space-y-2'>
        <Item>
          <Text.Root>@radix-ui/colors</Text.Root>
        </Item>

        <Item>
          <Text.Root>@stitches/react</Text.Root>
        </Item>
      </Collapsible.Content>
    </CollapsibleClient>
  );
};

const Item = ({ className, ...props }) => {
  return (
    <article
      className={cn('rounded-sm border px-4 py-3 text-sm', className)}
      {...props}
    />
  );
};

export default CollapsibleDemo;
