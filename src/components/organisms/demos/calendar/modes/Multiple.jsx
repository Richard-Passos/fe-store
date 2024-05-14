'use client';

import { useState } from 'react';

import { Calendar } from '@/components/molecules';

const DemosCalendarOrganismModesMultiple = (props) => {
  const [days, setDays] = useState([]);

  return (
    <Calendar
      onSelect={setDays}
      selected={days}
      {...props}
    />
  );
};

export default DemosCalendarOrganismModesMultiple;
