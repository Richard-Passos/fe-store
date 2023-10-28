import { Text } from '@/components/ui';
import { cn, normalizeCompName } from '@/utils';

import * as Modes from './modes';

const CALENDAR_MODE_VARIANTS = ['default', 'single', 'multiple', 'range'],
  CALENDAR_CAPTION_LAYOUT_VARIANTS = [
    'buttons',
    'dropdown',
    'dropdown-buttons',
  ],
  CALENDAR_NUMBER_OF_MONTHS_VARIANTS = [1, 2, 3];

const CALENDAR_VARIANTS = CALENDAR_MODE_VARIANTS.map((mode) =>
  CALENDAR_CAPTION_LAYOUT_VARIANTS.map((captionLayout) =>
    CALENDAR_NUMBER_OF_MONTHS_VARIANTS.map((numberOfMonths) => ({
      mode,
      captionLayout,
      numberOfMonths,
      CalendarMode: Modes[normalizeCompName(mode)],
    })),
  ),
)
  .reduce(
    (arr, variantsArr) => [
      ...arr,
      ...variantsArr.reduce((arr, variants) => [...arr, ...variants], []),
    ],
    [],
  )
  .sort((a, b) => a.numberOfMonths - b.numberOfMonths);

const CalendarView = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex flex-wrap justify-center gap-12', className)}
      {...props}
    >
      {CALENDAR_VARIANTS.map(({ CalendarMode, ...variants }) => (
        <li
          className={cn(
            'h-fit space-y-6 rounded-md bg-muted px-2 py-5 shadow-md sm:px-5',
            variants.numberOfMonths === 1 && 'w-full max-w-sm',
          )}
          key={getKeyValue(variants).join()}
        >
          <Title variants={variants} />

          <CalendarMode {...variants} />
        </li>
      ))}
    </ul>
  );
};

const getKeyValue = (obj) => Object.entries(obj);

const Title = ({ className, variants, ...props }) => {
  return (
    <Text.Title
      className={cn('text-base font-medium', className)}
      {...props}
    >
      {getKeyValue(variants).map(([key, value], i, arr) => (
        <>
          <span className='first:capitalize'>{key}</span>:{' '}
          <span className='text-muted-content'>{value.toString()}</span>
          {i < arr.length - 1 && ' - '}
        </>
      ))}
    </Text.Title>
  );
};

export default CalendarView;
