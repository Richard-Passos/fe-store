'use client';

import { ListComponent } from '@/components';
import { Button, Toast } from '@/components/ui';
import { useToast } from '@/hooks';
import { cn } from '@/utils';

import TOAST_VARIANTS from '../variants';
import Toaster from './Toaster';

const ToastDemoImperative = ({ className, ...props }) => {
  const { toast } = useToast();

  return (
    <>
      <ListComponent {...props}>
        {TOAST_VARIANTS.map((variants) => (
          <ListComponent.Item
            className='max-w-sm'
            key={Object.entries(variants).join()}
          >
            <ListComponent.Subtitle variants={variants} />

            <Button
              onClick={() =>
                toast({
                  title: 'Imperative toast',
                  description:
                    'This toast is called via a toast function from useToast.',
                  action: <ToastAction variants={variants}>Close</ToastAction>,
                  variants,
                })
              }
            >
              Add to calendar
            </Button>
          </ListComponent.Item>
        ))}
      </ListComponent>

      <Toaster />
    </>
  );
};

const ToastAction = ({ variants, className, children, ...props }) => {
  const { style } = variants;

  return (
    <Toast.Action
      altText='Close imperative toast'
      asChild
      {...props}
    >
      <Button
        className={cn(style !== 'outline' && '[--main:--content]', className)}
        variants={{
          color: 'inherit',
          style: 'outline',
          size: 'sm',
        }}
      >
        {children}
      </Button>
    </Toast.Action>
  );
};

export default ToastDemoImperative;
