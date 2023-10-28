'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui';

import CALENDAR_PROPS from './props';

const CalendarViewModeSingle = (props) => {
  const [selected, setSelected] = useState();

  return (
    <Calendar
      onSelect={setSelected}
      selected={selected}
      {...CALENDAR_PROPS}
      {...props}
    />
  );
};

export default CalendarViewModeSingle;
