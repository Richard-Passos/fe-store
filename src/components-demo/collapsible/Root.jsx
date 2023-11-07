'use client';

import { CaretSortIcon } from '@radix-ui/react-icons';

import { Button, Collapsible, Text } from '@/components/ui';
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
            variants={{ size: 'sm', style: 'outline', color: 'inverted' }}
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
        <Text>@radix-ui/primitives</Text>
      </Item>

      <Collapsible.Content className='space-y-2'>
        <Item>
          <Text>@radix-ui/colors</Text>
        </Item>

        <Item>
          <Text>@stitches/react</Text>
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
