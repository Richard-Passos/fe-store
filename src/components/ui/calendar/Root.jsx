'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils';

import { buttonVariants } from '../button';

const Calendar = ({ className, classNames = {}, components, ...props }) => {
  components = {
    IconLeft: ChevronLeft,
    IconRight: ChevronRight,
    ...components,
  };

  classNames = {
    ...classNames,
    ...Object.entries(CLASS_NAMES).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: cn(value, classNames[key]) }),
      {},
    ),
  };

  return (
    <DayPicker
      className={cn('rounded-md border p-3', className)}
      classNames={classNames}
      components={components}
      fixedWeeks
      showOutsideDays
      {...props}
    />
  );
};

const CLASS_NAMES = {
  months: ' flex max-sm:flex-col',
  month: 'space-y-4',
  caption: 'relative flex items-center justify-center pt-1',
  caption_label: 'text-sm font-medium',
  nav: 'flex items-center',
  nav_button: buttonVariants({
    color: 'danger',
    variant: 'ghost',
    className:
      'aspect-square h-9 px-0 [&_svg]:relative [&_svg]:h-7 [&_svg]:w-7',
  }),
  nav_button_previous: 'absolute left-1 [&_svg]:right-px',
  nav_button_next: 'absolute right-1 [&_svg]:left-px',
  head_cell: 'inline-block w-9 text-sm font-normal text-muted-content',
  row: 'mt-2 flex',
  cell: 'p-0 text-sm',
  day: buttonVariants({
    color: 'danger',
    variant: 'ghost',
    className: 'h-9 w-9 px-0 font-normal disabled:opacity-25',
  }),
  day_selected: 'bg-primary text-primary-content hover:bg-primary/80',
  day_outside: 'opacity-50 aria-selected:opacity-100',
  day_range_start: 'rounded-r-none [&.rounded-l-none]:rounded-r-lg',
  day_range_middle: 'rounded-none',
  day_range_end: 'rounded-l-none [&.rounded-r-none]:rounded-l-lg',
  day_hidden: 'invisible',
};

export default Calendar;
