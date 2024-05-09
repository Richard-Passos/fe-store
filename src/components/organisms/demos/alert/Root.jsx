import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import colorVariants from '@/components/colorVariants';
import { Alert } from '@/components/molecules';
import { alertTypes } from '@/components/molecules/alert';
import { cn, renderComp } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ALERT = {
  color: Object.keys(colorVariants),
  type: Object.keys(alertTypes)
};

const DemosAlertOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(ALERT).map((variants, i) => (
    <Demos
      className={cn('max-w-fit basis-auto', className)}
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
              <Icon src={t('icon')} />
            </div>
          </Alert.Icon>,
          [t('icon')]
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
