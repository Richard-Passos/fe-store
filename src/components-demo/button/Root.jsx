import { Button } from '@/components/atoms';
import { buttonSizes, buttonTypes } from '@/components/atoms/button';
import colorVariants from '@/components/colorVariants';
import { ListComponent } from '@/components/molecules';

const BUTTON_COLORS = Object.keys(colorVariants),
  BUTTON_TYPES = Object.keys(buttonTypes),
  BUTTON_SIZES = Object.keys(buttonSizes);

const BUTTON = BUTTON_COLORS.map((color) =>
  BUTTON_TYPES.map((type) =>
    BUTTON_SIZES.map((size) => ({
      color,
      type,
      size
    }))
  )
)
  .reduce(
    (arr, variantsArr) => [
      ...arr,
      ...variantsArr.reduce((arr, variants) => [...arr, ...variants], [])
    ],
    []
  )
  .sort((a, b) => b.type.localeCompare(a.type))
  .sort((a, b) => b.size.localeCompare(a.size));

const ButtonDemo = ({ className, ...props }) => {
  return (
    <ListComponent.Root {...props}>
      {BUTTON.map((variants) => (
        <ListComponent.Item
          className='max-w-sm'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Button {...variants}>Button</Button>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default ButtonDemo;
