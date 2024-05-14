'use client';

import { Calendar } from '@/components/molecules';

const DemosCalendarOrganismModesDefault = (props) => {
  return (
    <Calendar
      selected={new Date()}
      {...props}
    />
  );
};

export default DemosCalendarOrganismModesDefault;
