'use client';

import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons';
import { useState } from 'react';

import { Command, Popover } from '@/components/molecules';
import { cn } from '@/utils';

const DATA = [
  {
    value: 'next.js',
    label: 'Next.js'
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit'
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js'
  },
  {
    value: 'remix',
    label: 'Remix'
  },
  {
    value: 'astro',
    label: 'Astro'
  }
];

const ComboboxDemo = () => {
  const [isOpen, setIsOpen] = useState(false),
    [currValue, setCurrValue] = useState('');

  return (
    <Popover.Root
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <Popover.Trigger asChild>
        <button
          aria-expanded={isOpen}
          className='group flex h-10 w-52 items-center justify-between rounded-sm border bg-main px-4 text-sm transition-colors focus:outline disabled:pointer-events-none disabled:opacity-50'
          role='combobox'
        >
          <span className={cn(currValue === '' && 'text-content/75')}>
            {currValue
              ? DATA.find(({ value }) => value === currValue)?.label
              : 'Select a framework...'}
          </span>

          <ChevronDownIcon className='h-3.5 w-3.5 transition-transform group-data-open:rotate-180' />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className='w-52 border-none p-0'>
          <Command.Root>
            <Command.Search.Root>
              <Command.Search.Icon>
                <MagnifyingGlassIcon />
              </Command.Search.Icon>

              <Command.Search.Input placeholder='Search framework...' />
            </Command.Search.Root>

            <Command.List>
              <Command.Empty>No framework found.</Command.Empty>

              <Command.Group>
                {DATA.map(({ value, label }) => (
                  <Command.Item
                    className='relative pl-8'
                    key={value}
                    onSelect={(val) => {
                      setCurrValue(val === currValue ? '' : val);
                      setIsOpen(false);
                    }}
                    value={value}
                  >
                    <CheckIcon
                      className={cn(
                        'absolute left-[.5625rem] h-3.5 w-3.5 opacity-0',
                        currValue === value && 'opacity-100'
                      )}
                    />

                    {label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ComboboxDemo;
