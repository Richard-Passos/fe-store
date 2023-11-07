import { ListComponent } from '@/components';
import { cn, normalizeCompName } from '@/utils';

import * as CalendarModes from './modes';

const CALENDAR_MODE_VARIANTS = ['default', 'single', 'multiple', 'range'],
  CALENDAR_CAPTION_LAYOUT_VARIANTS = [
    'buttons',
    'dropdown',
    'dropdown-buttons',
  ],
  CALENDAR_NUMBER_OF_MONTHS_VARIANTS = [1, 2];

const CALENDAR_VARIANTS = CALENDAR_MODE_VARIANTS.map((mode) =>
  CALENDAR_CAPTION_LAYOUT_VARIANTS.map((captionLayout) =>
    CALENDAR_NUMBER_OF_MONTHS_VARIANTS.map((numberOfMonths) => ({
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
    <ListComponent {...props}>
      {CALENDAR_VARIANTS.map((variants) => {
        const Calendar =
          CalendarModes[normalizeCompName(variants.mode)] ||
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
    </ListComponent>
  );
};

export default CalendarDemo;
