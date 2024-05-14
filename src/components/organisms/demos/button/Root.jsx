import { useTranslations } from 'next-intl';

import { Button } from '@/components/atoms';
import { buttonSizes, buttonVariants } from '@/components/atoms/button';
import colors from '@/components/colors';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const BUTTON = {
  color: Object.keys(colors),
  variant: Object.keys(buttonVariants),
  size: Object.keys(buttonSizes)
};

const DemosButtonOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(BUTTON)
    .sort((a, b) => b.variant.localeCompare(a.variant))
    .sort((a, b) => b.size.localeCompare(a.size))
    .map((variants, i) => (
      <Demos
        key={i}
        variants={variants}
        {...props}
      >
        <Button {...variants}>{t('label')}</Button>
      </Demos>
    ));
};

export default DemosButtonOrganism;
