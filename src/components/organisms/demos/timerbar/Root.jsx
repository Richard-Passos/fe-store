import { Timerbar } from '@/components/atoms';
import { progressSizes } from '@/components/atoms/progress';
import colorVariants from '@/components/colorVariants';
import { ListComponent } from '@/components/molecules';

const TIMERBAR_COLORS = Object.keys(colorVariants),
  TIMERBAR_SIZES = Object.keys(progressSizes);

const TIMERBAR = TIMERBAR_COLORS.map((color) =>
  TIMERBAR_SIZES.map((size) => ({
    color,
    size
  }))
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.size.localeCompare(a.size));

const TIMERBAR_DURATION = 5000;

const TimerbarDemo = (props) => {
  return (
    <ListComponent.Root {...props}>
      {TIMERBAR.map((variants) => (
        <ListComponent.Item
          className='max-w-sm'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Timerbar.Root
            duration={TIMERBAR_DURATION}
            variants={variants}
          >
            <Timerbar.Indicator />
          </Timerbar.Root>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default TimerbarDemo;
