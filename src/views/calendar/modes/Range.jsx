'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui';

import CALENDAR_PROPS from './props';

const CalendarViewModeRange = (props) => {
  const [days, setDays] = useState({});

  return (
    <Calendar
      onSelect={setDays}
      selected={days}
      {...CALENDAR_PROPS}
      {...props}
    />
  );
};

export default CalendarViewModeRange;
