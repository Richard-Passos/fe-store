'use client';

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { useState } from 'react';

import { Calendar, Popover } from '@/components/ui';
import { cn } from '@/utils';

const DatePickerDemo = () => {
  const [date, setDate] = useState();

  return (
    <Popover>
      <Popover.Trigger asChild>
        <button
          className={cn(
            'flex h-10 w-[277.6px] items-center gap-2 rounded-sm border bg-main px-4 text-sm',
          )}
        >
          <CalendarIcon className='h-4 w-4' />

          {date ? (
            format(date, 'PPP')
          ) : (
            <span className='text-muted-content'>Pick a date</span>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className='w-auto rounded-sm border-none p-0'>
          <Calendar
            className='rounded-inherit'
            components={{
              IconLeft: ChevronLeftIcon,
              IconRight: ChevronRightIcon,
            }}
            initialFocus
            mode='single'
            onSelect={setDate}
            selected={date}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  );
};

export default DatePickerDemo;
