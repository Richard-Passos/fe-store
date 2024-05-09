import { ListComponent } from '@/components/molecules';
import { cn, normCompName } from '@/utils';

import * as CalendarModes from './modes';

const CALENDAR_MODE = ['default', 'single', 'multiple', 'range'],
  CALENDAR_CAPTION_LAYOUT = [
    'buttons',
    'dropdown',
    'dropdown-buttons',
  ],
  CALENDAR_NUMBER_OF_MONTHS = [1, 2];

const CALENDAR = CALENDAR_MODE.map((mode) =>
  CALENDAR_CAPTION_LAYOUT.map((captionLayout) =>
    CALENDAR_NUMBER_OF_MONTHS.map((numberOfMonths) => ({
      mode,
      captionLayout,
      numberOfMonths,
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

const CalendarDemo = ({ className, ...props }) => {
  return (
    <ListComponent.Root {...props}>
      {CALENDAR.map((variants) => {
        const Calendar =
          CalendarModes[normCompName(variants.mode)] ||
          CalendarModes.Default;

        return (
          <ListComponent.Item
            className={cn(
              'max-sm:px-0',
              variants.numberOfMonths === 1
                ? 'max-w-sm'
                : 'max-w-none sm:w-auto',
            )}
            key={Object.entries(variants).join()}
          >
            <ListComponent.Subtitle
              className='max-sm:px-5'
              variants={variants}
            />

            <Calendar
              className='max-sm:mx-auto'
              {...variants}
            />
          </ListComponent.Item>
        );
      })}
    </ListComponent.Root>
  );
};

export default CalendarDemo;
