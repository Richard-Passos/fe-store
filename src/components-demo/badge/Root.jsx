import { ListComponent } from '@/components';
import { Badge } from '@/components/ui';
import { badgeStyles } from '@/components/ui/badge';
import variantColors from '@/components/ui/variantColors';

const BADGE_COLOR_VARIANTS = Object.keys(variantColors),
  BADGE_STYLE_VARIANTS = Object.keys(badgeStyles);

const BADGE_VARIANTS = BADGE_COLOR_VARIANTS.map((color) =>
  BADGE_STYLE_VARIANTS.map((style) => ({
    color,
    style,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.style.localeCompare(a.style));

const BadgeDemo = ({ className, ...props }) => {
  return (
    <ListComponent {...props}>
      {BADGE_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-xs'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Badge variants={variants}>Badge</Badge>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default BadgeDemo;
