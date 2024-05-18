'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Icon, Select } from '@/components/atoms';
import { cn, normId } from '@/utils';

const ThemeChanger = ({ items, className, color, variant, size, ...props }) => {
  const [isMounted, setIsMounted] = useState(false),
    { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Select.Root
      onValueChange={setTheme}
      value={theme}
    >
      <Select.Trigger
        className={cn('aspect-square w-auto justify-center px-0', className)}
        color={color}
        size={size}
        variant={variant}
        {...props}
      >
        <Select.Value />
      </Select.Trigger>

      <Select.Content
        color={color}
        variant={variant}
      >
        <Select.Viewport>
          {Object.entries(items ?? {}).map(([key, data]) => (
            <Select.Item.Root
              className='aspect-square w-auto justify-center px-0'
              color='inherit'
              key={key}
              size={size}
              value={normId(key)}
            >
              <Select.Item.Label>
                <Icon
                  aria-hidden
                  className='mx-auto size-1/2'
                  {...data?.icon}
                />

                <span className='sr-only'>{data?.label}</span>
              </Select.Item.Label>
            </Select.Item.Root>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default ThemeChanger;
