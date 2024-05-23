'use client';

import { Slot } from '@radix-ui/react-slot';
import { useLocale } from 'next-intl';
import { forwardRef } from 'react';
import { DayPicker } from 'react-day-picker';

import { dateFnsLocales } from '@/navigation';
import { normKey } from '@/utils';

const AtomCalendar = ({ components, ...props }, ref) => {
  const locale = useLocale();

  return (
    <DayPicker
      components={Object.entries(components ?? {}).reduce(
        (obj, [key, value]) => ({
          ...obj,
          [key]: (props) => <Slot {...props}>{value}</Slot>
        }),
        {}
      )}
      fixedWeeks
      locale={dateFnsLocales[normKey(locale)]}
      ref={ref}
      showOutsideDays
      {...props}
    />
  );
};

export default forwardRef(AtomCalendar);
