'use client';

import { ListComponent } from '@/components';
import { Slider } from '@/components/ui';
import { sliderOrientations } from '@/components/ui/slider';

const SLIDER_ORIENTATION_VARIANTS = Object.keys(sliderOrientations),
  SLIDER_INVERTED_VARIANTS = [false, true];

const SLIDER_VARIANTS = SLIDER_ORIENTATION_VARIANTS.map((orientation) =>
  SLIDER_INVERTED_VARIANTS.map((inverted) => ({
    orientation,
    inverted,
  })),
).reduce((arr, variants) => [...arr, ...variants], []);

const SliderDemo = ({ className, ...props }) => {
  return (
    <ListComponent {...props}>
      {SLIDER_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-lg'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Slider
            className={variants.orientation === 'vertical' && 'h-96'}
            defaultValue={[50]}
            {...variants}
          >
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>

            <Slider.Thumb aria-label='Volume' />
          </Slider>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default SliderDemo;
