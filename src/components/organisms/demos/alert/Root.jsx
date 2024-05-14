import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import colors from '@/components/colors';
import { Alert } from '@/components/molecules';
import { alertVariants } from '@/components/molecules/alert';
import { renderComp } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ALERT = {
  color: Object.keys(colors),
  variant: Object.keys(alertVariants)
};

const DemosAlertOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(ALERT).map((variants, i) => (
    <Demos
      key={i}
      variants={variants}
      {...props}
    >
      <Alert.Root
        className='rounded-sm'
        {...variants}
      >
        {renderComp(
          <Alert.Icon>
            <div>
              <Icon
                color={t('icon.color')}
                src={t('icon.src')}
              />
            </div>
          </Alert.Icon>,
          [t('icon.src')]
        )}

        {renderComp(<Alert.Title>{t('title')}</Alert.Title>, [t('title')])}

        <Alert.Description className='mt-1.5'>
          {t('description')}
        </Alert.Description>
      </Alert.Root>
    </Demos>
  ));
};

export default DemosAlertOrganism;
