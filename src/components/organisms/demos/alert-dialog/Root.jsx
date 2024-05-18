import { useTranslations } from 'next-intl';

import colors from '@/components/colors';
import { AlertDialog } from '@/components/molecules';
import { cn } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ALERT_DIALOG = {
  color: Object.keys(colors)
};

const DemosAlertDialogOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(ALERT_DIALOG).map((variants, i) => (
    <Demos
      className={cn('w-fit', className)}
      key={i}
      variants={variants}
      {...props}
    >
      <AlertDialog.Root>
        <AlertDialog.Trigger
          color={variants.color}
          size={t('trigger.size')}
          variant={t('trigger.variant')}
        >
          {t('trigger.label')}
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay {...variants} />

          <AlertDialog.Content {...variants}>
            <AlertDialog.Header>
              <AlertDialog.Title>{t('title')}</AlertDialog.Title>

              <AlertDialog.Description className='mt-xs'>
                {t('description')}
              </AlertDialog.Description>
            </AlertDialog.Header>

            <AlertDialog.Actions className='mt-md'>
              <AlertDialog.Cancel
                color='inherit'
                size={t('cancel.size')}
                variant={t('cancel.variant')}
              >
                {t('cancel.label')}
              </AlertDialog.Cancel>

              <AlertDialog.Action
                className='[--root-active:--root-primary-a] [--root-content:--root-primary-c] [--root-main:--root-primary] [--root-muted:--root-primary-m]'
                color='inherit'
                size={t('confirm.size')}
                variant={t('confirm.variant')}
              >
                {t('confirm.label')}
              </AlertDialog.Action>
            </AlertDialog.Actions>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Demos>
  ));
};

export default DemosAlertDialogOrganism;
