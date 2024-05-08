'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Icon, Select } from '@/components/atoms';
import { cn, normId } from '@/utils';

const ThemeChanger = ({ items, className, color, type, ...props }) => {
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
      {...props}
    >
      <Select.Trigger
        className={cn(
          'size-8 justify-center border-0 px-0 lowercase',
          className
        )}
        color={color}
        type={type}
      >
        <Select.Value />
      </Select.Trigger>

      <Select.Content
        align='center'
        color={color}
        type={type}
      >
        <Select.Viewport>
          {Object.entries(items ?? {}).map(([key, data = {}]) => (
            <Select.Item.Root
              className='size-8 justify-center px-0'
              key={key}
              value={normId(key)}
            >
              <Select.Item.Text>
                <Icon
                  aria-hidden
                  className='mx-auto size-1/2'
                  src={data.icon}
                />

                <span className='sr-only'>{data.label}</span>
              </Select.Item.Text>
            </Select.Item.Root>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default ThemeChanger;
