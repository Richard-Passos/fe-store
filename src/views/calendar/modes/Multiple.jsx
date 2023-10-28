'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui';

import CALENDAR_PROPS from './props';

const CalendarViewModeMultiple = (props) => {
  const [days, setDays] = useState([]);

  return (
    <Calendar
      onSelect={setDays}
      selected={days}
      {...CALENDAR_PROPS}
      {...props}
    />
  );
};

export default CalendarViewModeMultiple;
