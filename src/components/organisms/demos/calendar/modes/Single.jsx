'use client';

import { useState } from 'react';

import { Calendar } from '@/components/molecules';

const DemosCalendarOrganismModesSingle = (props) => {
  const [selected, setSelected] = useState();

  return (
    <Calendar
      onSelect={setSelected}
      selected={selected}
      {...props}
    />
  );
};

export default DemosCalendarOrganismModesSingle;
