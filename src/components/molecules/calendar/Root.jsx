'use client';

import { Slot } from '@radix-ui/react-slot';
import { useLocale } from 'next-intl';
import { DayPicker } from 'react-day-picker';

import { Box } from '@/components/atoms';
import { button } from '@/components/atoms/button';
import { dateFnsLocales } from '@/navigation';
import { cn, normKey } from '@/utils';

const Calendar = ({ className, classNames, components, ...props }) => {
  const locale = useLocale();

  const mergedClassNames = Object.entries(calendarClassNames ?? {}).reduce(
    (obj, [key, value]) => ({ ...obj, [key]: cn(value, classNames?.[key]) }),
    {}
  );

  return (
    <Box
      asChild
      className={cn('text-sm', className)}
      fixedWeeks
      locale={dateFnsLocales[normKey(locale)]}
      showOutsideDays
      {...props}
    >
      <DayPicker
        classNames={{ ...classNames, ...mergedClassNames }}
        components={Object.entries(components ?? {}).reduce(
          (obj, [key, value]) => ({
            ...obj,
            [key]: (props) => <Slot {...props}>{value}</Slot>
          }),
          {}
        )}
      />
    </Box>
  );
};

const calendarClassNames = {
  caption: 'relative flex h-7 w-full gap-2 items-center justify-between',
  caption_dropdowns: 'flex h-full gap-1 first:[&>div]:hidden',
  caption_label: 'flex h-full items-center gap-1 rounded-sm font-medium',

  cell: 'p-0',

  day: button({
    color: 'main',
    size: 'xs',
    variant: 'ghost',
    className:
      'aspect-square focus-visible:z-10 px-0 disabled:opacity-25 [&:not(button)]:pointer-events-none'
  }),
  day_hidden: 'invisible',
  day_outside: 'opacity-50 hover:opacity-100 aria-selected:opacity-100',
  day_range_end: 'rounded-l-none bg [&.rounded-r-none]:rounded-l-sm',
  day_range_middle: '!rounded-none',
  day_range_start: 'rounded-r-none [&.rounded-l-none]:rounded-r-sm',
  day_selected: 'bg-primary text-primary-content hover:bg-primary-active',

  dropdown:
    'absolute inset-0 cursor-pointer opacity-0 [&:focus+div]:outline [&:hover+div]:bg-active',
  dropdown_month:
    'relative [&>div]:px-2 [&>div]:pointer-events-none [&>span]:hidden',
  dropdown_year:
    'relative [&>div]:px-2 [&>div]:pointer-events-none [&>span]:hidden',
  dropdown_icon: 'size-2.5',

  head_cell:
    'inline-flex w-8 items-center justify-center font-normal text-content/75 lowercase',

  month: 'flex flex-col gap-4 items-center',
  months: 'flex flex-wrap justify-center gap-4',

  nav: 'flex gap-1 items-center justify-center',
  nav_button: button({
    color: 'main',
    size: 'xs',
    variant: 'ghost',
    className: 'aspect-square px-0'
  }),
  nav_icon: 'size-1/2',

  row: 'mt-2 flex',

  weeknumber: button({
    color: 'main',
    size: 'xs',
    variant: 'ghost',
    className:
      'aspect-square px-0 font-normal text-opacity-75 disabled:opacity-25 [&:not(button)]:pointer-events-none'
  })
};

export default Calendar;
