'use client';

import { useEffect, useReducer } from 'react';

import { ListComponent } from '@/components';
import { Timerbar } from '@/components/ui';
import { progressSizes } from '@/components/ui/progress';
import { TIMERBAR_UPDATE_DELAY } from '@/components/ui/timerbar';
import variantColors from '@/components/ui/variantColors';

const TIMERBAR_COLOR_VARIANTS = Object.keys(variantColors),
  TIMERBAR_SIZE_VARIANTS = Object.keys(progressSizes);

const TIMERBAR_VARIANTS = TIMERBAR_COLOR_VARIANTS.map((color) =>
  TIMERBAR_SIZE_VARIANTS.map((size) => ({
    color,
    size,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.size.localeCompare(a.size));

const TIMERBAR_DURATION = 5000;

const TimerbarDemo = (props) => {
  const [key, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate();
    }, TIMERBAR_DURATION + TIMERBAR_UPDATE_DELAY);

    return () => clearInterval(timer);
  }, []);

  return (
    <ListComponent {...props}>
      {TIMERBAR_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-sm'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Timerbar
            duration={TIMERBAR_DURATION}
            key={key}
            variants={variants}
          >
            <Timerbar.Indicator />
          </Timerbar>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default TimerbarDemo;
