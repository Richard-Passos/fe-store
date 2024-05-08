'use client';

import { ListComponent } from '@/components/molecules';
import { Slider } from '@/components/atoms';
import { sliderDirections } from '@/components/atoms/slider';

const SLIDER_ORIENTATION = Object.keys(sliderDirections),
  SLIDER_INVERTED = [false, true];

const SLIDER = SLIDER_ORIENTATION.map((orientation) =>
  SLIDER_INVERTED.map((inverted) => ({
    orientation,
    inverted,
  })),
).reduce((arr, variants) => [...arr, ...variants], []);

const SliderDemo = ({ className, ...props }) => {
  return (
    <ListComponent.Root {...props}>
      {SLIDER.map((variants) => (
        <ListComponent.Item
          className='max-w-lg'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Slider.Root
            className={variants.orientation === 'vertical' && 'h-96'}
            defaultValue={[50]}
            {...variants}
          >
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>

            <Slider.Thumb aria-label='Volume' />
          </Slider.Root>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default SliderDemo;
