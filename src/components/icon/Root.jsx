import { Svg } from '@/components/ui';
import { cn, normalizeCompName } from '@/utils';

const Root = ({ name = '', className, ...props }) => {
  const Tag = Svg[normalizeCompName(name)] || Svg.QuestionMark;

  return (
    <Tag
      className={cn('h-5 w-5', className)}
      {...props}
    />
  );
};

export default Root;
