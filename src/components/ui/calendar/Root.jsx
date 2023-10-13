'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils';

import { buttonVariants } from '../button';

const Calendar = ({ className, classNames = {}, ...props }) => {
  const mergedClassNames = Object.entries(CLASS_NAMES).reduce(
    (obj, [key, value]) => ({ ...obj, [key]: cn(value, classNames[key]) }),
    {},
  );

  props = {
    ...props,
    components: {
      IconLeft: ChevronLeft,
      IconRight: ChevronRight,
      ...props.components,
    },
    classNames: {
      ...classNames,
      ...mergedClassNames,
    },
  };

  return (
    <DayPicker
      className={cn('rounded-md border p-3', className)}
      fixedWeeks
      showOutsideDays
      {...props}
    />
  );
};

const CLASS_NAMES = {
  button: buttonVariants({
    color: 'inverted',
    variant: 'ghost',
    className: 'px-0 aspect-square text-sm',
  }),

  caption: 'relative flex items-center justify-center mt-1',
  caption_dropdowns: 'flex [&>div:first-child]:hidden gap-4',
  caption_label: 'text-sm font-medium flex items-center gap-2',

  cell: 'p-0',

  day: 'h-9 disabled:opacity-25',
  day_hidden: 'invisible',
  day_outside: 'opacity-50 aria-selected:opacity-100',
  day_range_end: 'rounded-l-none [&.rounded-r-none]:rounded-l-lg',
  day_range_middle: 'rounded-none',
  day_range_start: 'rounded-r-none [&.rounded-l-none]:rounded-r-lg',
  day_selected: 'bg-primary text-primary-content hover:bg-primary/80',

  dropdown: 'opacity-0 bg-main text-content absolute inset-0 cursor-pointer',
  dropdown_month: 'relative [&>span]:hidden [&>select:focus+div]:outline',
  dropdown_year: 'relative [&>span]:hidden [&>select:focus+div]:outline',

  head_cell: 'inline-block w-9 text-sm font-normal text-muted-content',

  month: 'space-y-4',
  months: 'flex gap-4 max-sm:flex-col',

  nav: 'flex items-center',
  nav_button: 'absolute h-7',
  nav_button_next: 'right-1 [&_svg]:left-px',
  nav_button_previous: 'left-1 [&_svg]:right-px',
  nav_icon: 'relative h-4 w-4',

  row: 'mt-2 flex',
};

export default Calendar;
