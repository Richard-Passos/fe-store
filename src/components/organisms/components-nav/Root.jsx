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
      type={t('type')}
      {...props}
    >
      {renderComp(
        <TextTitle className='px-sm text-base'>{t('title')}</TextTitle>,
        [t('title')]
      )}

      <div className='relative mt-sm grow basis-xl overflow-hidden'>
        <nav className='absolute inset-0 grid grid-cols-2 gap-2 overflow-y-hidden px-xs [scrollbar-gutter:stable_both-edges] group-hover:overflow-y-auto md:grid-cols-3'>
          {translationKeys(global, 'components').map((key) => (
            <Action
              className='group/action aspect-video size-full rounded-sm p-2 text-sm'
              color={t('action.color')}
              href={`/components/${normId(key)}`}
              key={key}
              size={t('action.size')}
              type={t('action.type')}
            >
              <span className='opacity-75 group-hover/action:opacity-100'>
                {global(`components.${key}.title`)}
              </span>
            </Action>
          ))}
        </nav>
      </div>
    </Box>
  );
};

export default ComponentsNavOrganism;
