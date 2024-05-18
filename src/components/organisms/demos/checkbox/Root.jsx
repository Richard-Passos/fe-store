import { useTranslations } from 'next-intl';

import { Box, Checkbox, Icon, Label } from '@/components/atoms';
import colors from '@/components/colors';
import { controlVariants } from '@/components/controlVariants';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const CHECKBOX = {
  color: Object.keys(colors),
  variant: Object.keys(controlVariants)
};

const DemosCheckboxOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(CHECKBOX).map((variants, i) => (
    <Demos
      key={i}
      variants={variants}
      {...props}
    >
      <Box className='rounded-sm p-0 shadow-none'>
        <Label className='flex items-center gap-xs p-2.5'>
          <Checkbox.Root
            className='mb-auto'
            {...variants}
          >
            <Checkbox.Indicator>
              <Icon
                color={t('icon.color')}
                src={t('icon.src')}
              />
            </Checkbox.Indicator>
          </Checkbox.Root>

          {t('label')}
        </Label>
      </Box>
    </Demos>
  ));
};

export default DemosCheckboxOrganism;
