'use client';

import { Calendar } from '@/components/ui';

import CALENDAR_PROPS from './props';

const CalendarViewModeDefault = (props) => {
  return (
    <Calendar
      selected={new Date()}
      {...CALENDAR_PROPS}
      {...props}
    />
  );
};

export default CalendarViewModeDefault;
