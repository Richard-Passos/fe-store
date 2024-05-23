import { forwardRef } from 'react';

import { Box, Calendar } from '@/components/atoms';
import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const MoleculeCalendar = ({ className, classNames, ...props }, ref) => {
  const mergedClassNames = Object.entries(
    moleculeCalendarClassNames ?? {}
  ).reduce(
    (obj, [key, value]) => ({ ...obj, [key]: cn(value, classNames?.[key]) }),
    {}
  );

  return (
    <Box
      asChild
      className={cn('p-sm text-sm', className)}
      classNames={{ ...classNames, ...mergedClassNames }}
      ref={ref}
      {...props}
    >
      <Calendar />
    </Box>
  );
};

const moleculeCalendarClassNames = {
  caption: 'relative flex h-7 w-full gap-xs items-center justify-between',
  caption_dropdowns: 'flex h-full gap-2xs first:[&>div]:hidden',
  caption_label:
    'flex h-full items-center px-xs gap-2xs rounded-sm font-medium',

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
  day_range_end: 'rounded-l-none [&.rounded-r-none]:rounded-l-sm',
  day_range_middle: '!rounded-none',
  day_range_start: 'rounded-r-none [&.rounded-l-none]:rounded-r-sm',
  day_selected: 'bg-primary text-primary-content hover:bg-primary-active',

  dropdown:
    'absolute inset-0 cursor-pointer opacity-0 [&:focus+div]:outline [&:hover+div]:bg-active',
  dropdown_month:
    'relative [&>div]:px-xs [&>div]:pointer-events-none [&>span]:hidden',
  dropdown_year:
    'relative [&>div]:px-xs [&>div]:pointer-events-none [&>span]:hidden',
  dropdown_icon: 'size-2.5',

  head_cell:
    'inline-flex w-8 items-center justify-center font-normal text-content/75 lowercase',

  month: 'flex flex-col gap-sm items-center',
  months: 'flex flex-wrap justify-center gap-sm',

  nav: 'flex gap-2xs items-center justify-center',
  nav_button: button({
    color: 'main',
    size: 'xs',
    variant: 'ghost'
  }),
  nav_icon: 'h-1/2 aspect-square',

  row: 'mt-xs flex',

  weeknumber: button({
    color: 'main',
    size: 'xs',
    variant: 'ghost',
    className:
      'aspect-square px-0 font-normal text-opacity-75 disabled:opacity-25 [&:not(button)]:pointer-events-none'
  })
};

export default forwardRef(MoleculeCalendar);
