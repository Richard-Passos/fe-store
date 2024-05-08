'use client';

import { ListComponent } from '@/components/molecules';
import { Button } from '@/components/atoms';
import { Toast } from '@/components/molecules';
import { useToast } from '@/hooks';
import { cn } from '@/utils';

import TOAST from '../variants';
import Toaster from './Toaster';

const ToastDemoImperative = ({ className, ...props }) => {
  const { toast } = useToast();

  return (
    <>
      <ListComponent.Root {...props}>
        {TOAST.map((variants) => (
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
                  action: <ToastAction {...variants}>Close</ToastAction>,
                  variants,
                })
              }
            >
              Add to calendar
            </Button>
          </ListComponent.Item>
        ))}
      </ListComponent.Root>

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
          type: 'outline',
          size: 'sm',
        }}
      >
        {children}
      </Button>
    </Toast.Action>
  );
};

export default ToastDemoImperative;
