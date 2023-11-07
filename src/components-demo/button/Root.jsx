import { ListComponent } from '@/components';
import { Button } from '@/components/ui';
import { buttonSizes, buttonStyles } from '@/components/ui/button';
import variantColors from '@/components/ui/variantColors';

const BUTTON_COLOR_VARIANTS = Object.keys(variantColors),
  BUTTON_STYLE_VARIANTS = Object.keys(buttonStyles),
  BUTTON_SIZE_VARIANTS = Object.keys(buttonSizes);

const BUTTON_VARIANTS = BUTTON_COLOR_VARIANTS.map((color) =>
  BUTTON_STYLE_VARIANTS.map((style) =>
    BUTTON_SIZE_VARIANTS.map((size) => ({
      color,
      style,
      size,
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
  .sort((a, b) => b.style.localeCompare(a.style))
  .sort((a, b) => b.size.localeCompare(a.size));

const ButtonDemo = ({ className, ...props }) => {
  return (
    <ListComponent {...props}>
      {BUTTON_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-sm'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Button variants={variants}>Button</Button>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default ButtonDemo;
