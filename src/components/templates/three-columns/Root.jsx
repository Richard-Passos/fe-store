import { useTranslations } from 'next-intl';

import { GridPattern, Text } from '@/components/atoms';
import { Section } from '@/components/molecules';
import * as structures from '@/components/structures';
import { cn, normCompName, renderComp } from '@/utils';

const ThreeColumnsTemplate = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Block = structures[normCompName(t('block.slug'))];

  return (
    <Section
      className={cn('grid items-start gap-lg sm:grid-cols-3', className)}
      color={t('color')}
      size={t('size')}
      variant={t('variant')}
      {...props}
    >
      {renderComp(
        <header>
          {renderComp(<Text.Title>{t('title')}</Text.Title>, [t('title')])}

          {renderComp(
            <Text.Description className='mt-4 text-content'>
              {t('description')}
            </Text.Description>,
            [t('description')]
          )}
        </header>,
        [t('title') || t('description')]
      )}

      {Block && (
        <Block
          className='sm:col-span-2'
          namespace={`${namespace}.block`}
        />
      )}

      {renderComp(<GridPattern className='inset-x-auto w-screen' />, [
        t.raw('hasPattern')
      ])}
    </Section>
  );
};

export default ThreeColumnsTemplate;
