import { useTranslations } from 'next-intl';

import { Badge } from '@/components/atoms';
import { badgeVariants } from '@/components/atoms/badge';
import colors from '@/components/colors';
import { cn } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const BADGE = {
  color: Object.keys(colors),
  variant: Object.keys(badgeVariants)
};

const DemosBadgeOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(BADGE)
    .sort((a, b) => b.variant.localeCompare(a.variant))
    .map((variants, i) => (
      <Demos
        className={cn('w-72', className)}
        key={i}
        variants={variants}
        {...props}
      >
        <Badge {...variants}>{t('label')}</Badge>
      </Demos>
    ));
};

export default DemosBadgeOrganism;
