'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { Select } from '@/components/atoms';
import { usePathname, useRouter } from '@/navigation';
import { cn, normId } from '@/utils';

const LocaleChanger = ({ items, className, color, type, ...props }) => {
  const activeLocale = useLocale(),
    router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  return (
    <Select.Root
      onValueChange={(locale) =>
        router.replace(`${pathname}?${searchParams}`, { locale })
      }
      value={activeLocale}
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
          {Object.entries(items ?? {}).map(([key, label]) => (
            <Select.Item.Root
              className='size-8 justify-center px-0 lowercase '
              key={key}
              value={normId(key)}
            >
              <Select.Item.Text>
                <span aria-hidden>{key}</span>

                <span className='sr-only'>{label}</span>
              </Select.Item.Text>
            </Select.Item.Root>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default LocaleChanger;
