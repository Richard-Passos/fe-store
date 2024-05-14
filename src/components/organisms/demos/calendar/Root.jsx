import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Icon } from '@/components/atoms';
import { cn, normCompName } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';
import modes from './modes';

const CALENDAR = {
  mode: ['default', 'single', 'multiple', 'range'],
  captionLayout: ['buttons', 'dropdown', 'dropdown-buttons'],
  numberOfMonths: [1, 2]
};

const DemosCalendarOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(CALENDAR)
    .sort((a, b) => a.numberOfMonths - b.numberOfMonths)
    .map((variants, i) => {
      const Calendar = modes[normCompName(variants.mode)] || modes.Default;

      return (
        <Demos
          key={i}
          variants={variants}
          {...props}
        >
          <Calendar
            className='rounded-sm'
            components={{
              IconLeft: (
                <div>
                  <Icon
                    color={t('iconLeft.color')}
                    src={t('iconLeft.src')}
                  />
                </div>
              ),
              IconRight: (
                <div>
                  <Icon
                    color={t('iconRight.color')}
                    src={t('iconRight.src')}
                  />
                </div>
              ),
              IconDropdown: (
                <div>
                  <Icon
                    className={cn(
                      '[select:focus+div_&]:animate-[--anim]',
                      animations[t('iconDropdown.animation')]
                    )}
                    color={t('iconDropdown.color')}
                    src={t('iconDropdown.src')}
                  />
                </div>
              )
            }}
            fromYear={t.raw('fromYear')}
            toYear={t.raw('toYear')}
            {...variants}
          />
        </Demos>
      );
    });
};

export default DemosCalendarOrganism;
