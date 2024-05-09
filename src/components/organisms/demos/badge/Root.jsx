import { Badge } from '@/components/atoms';
import { badgeTypes } from '@/components/atoms/badge';
import colorVariants from '@/components/colorVariants';
import { ListComponent } from '@/components/molecules';

const BADGE_COLORS = Object.keys(colorVariants),
  BADGE_TYPES = Object.keys(badgeTypes);

const BADGE = BADGE_COLORS.map((color) =>
  BADGE_TYPES.map((type) => ({
    color,
    type
  }))
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.type.localeCompare(a.type));

const BadgeDemo = ({ className, ...props }) => {
  return (
    <ListComponent.Root {...props}>
      {BADGE.map((variants) => (
        <ListComponent.Item
          className='max-w-xs'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Badge {...variants}>Badge</Badge>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default BadgeDemo;
