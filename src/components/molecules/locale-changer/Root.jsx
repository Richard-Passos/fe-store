'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { Select } from '@/components/atoms';
import { usePathname, useRouter } from '@/navigation';
import { cn, normId } from '@/utils';

const LocaleChanger = ({
  items,
  className,
  color,
  variant,
  size,
  ...props
}) => {
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
    >
      <Select.Trigger
        className={cn(
          'aspect-square w-auto justify-center px-0 first-letter:normal-case',
          className
        )}
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
          {Object.entries(items ?? {}).map(([key, label]) => (
            <Select.Item.Root
              className='aspect-square w-auto justify-center px-0 first-letter:normal-case'
              color='inherit'
              key={key}
              size={size}
              value={normId(key)}
            >
              <Select.Item.Label>
                <span aria-hidden>{key}</span>

                <span className='sr-only'>{label}</span>
              </Select.Item.Label>
            </Select.Item.Root>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default LocaleChanger;
