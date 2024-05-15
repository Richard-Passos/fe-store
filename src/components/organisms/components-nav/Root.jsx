import { useTranslations } from 'next-intl';

import { Box } from '@/components/atoms';
import { TextTitle } from '@/components/atoms/text';
import { Action } from '@/components/molecules';
import { cn, normId, renderComp, translationKeys } from '@/utils';

const ComponentsNavOrganism = ({ namespace, className, ...props }) => {
  const global = useTranslations(),
    t = useTranslations(namespace);

  return (
    <Box
      className={cn('group size-full grow px-0 shadow-lg', className)}
      color={t('color')}
      {...props}
    >
      {renderComp(
        <TextTitle className='px-sm text-base'>{t('title')}</TextTitle>,
        [t('title')]
      )}

      <div className='relative mt-xs grow basis-xl overflow-hidden'>
        <nav className='absolute inset-0 grid grid-cols-2 gap-2 overflow-y-hidden px-xs pt-1 [scrollbar-gutter:stable_both-edges] group-hover:overflow-y-auto md:grid-cols-3'>
          {translationKeys(global, 'components').map((key) => (
            <Action
              className='aspect-video size-full rounded-sm p-2 text-sm text-opacity-75 hover:text-opacity-100'
              color={t('action.color')}
              href={`/components/${normId(key)}`}
              key={key}
              variant={t('action.variant')}
            >
              {global(`components.${key}.title`)}
            </Action>
          ))}
        </nav>
      </div>
    </Box>
  );
};

export default ComponentsNavOrganism;
