'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';

import { ListComponent } from '@/components';
import { Button, Timerbar, Toast } from '@/components/ui';
import { cn, isFunctionThanCall } from '@/utils';

import { TOAST_DURATION } from './Root';
import TOAST_VARIANTS from './variants';

const ToastDemoDeclarative = (props) => {
  const [isOpen, setIsOpen] = useState({}),
    [isPaused, setIsPaused] = useState(false);

  return (
    <ListComponent {...props}>
      {TOAST_VARIANTS.map((variants) => {
        const { style, color } = variants;

        const isToastOpen = !!isOpen[style]?.[color],
          setIsToastOpen = (toastState) =>
            setIsOpen((state) => ({
              ...state,
              [style]: { ...state[style], [color]: toastState },
            }));

        return (
          <ListComponent.Item
            className='max-w-sm'
            key={Object.entries(variants).join()}
          >
            <ListComponent.Subtitle variants={variants} />

            <ToastTrigger setIsToastOpen={setIsToastOpen}>
              Add to calendar
            </ToastTrigger>

            <Toast
              onOpenChange={setIsToastOpen}
              onPause={() => setIsPaused(true)}
              onResume={() => setIsPaused(false)}
              open={isToastOpen}
              variants={variants}
              {...props}
            >
              <Toast.Header>
                <Toast.Title>Declarative toast</Toast.Title>

                <Toast.Description>
                  This toast is called via react useState.
                </Toast.Description>
              </Toast.Header>

              <ToastAction
                altText='Close declarative toast'
                variants={variants}
              >
                Close
              </ToastAction>

              <ToastClose variants={variants} />

              {isToastOpen && (
                <ToastTimerbar
                  pause={isPaused}
                  variants={variants}
                />
              )}
            </Toast>
          </ListComponent.Item>
        );
      })}
    </ListComponent>
  );
};

const ToastTrigger = ({ setIsToastOpen, ...props }) => {
  const delayRef = useRef(0);

  useEffect(() => clearTimeout(delayRef.current), []);

  return (
    <Button
      {...props}
      onClick={(ev) => {
        setIsToastOpen(false);

        clearTimeout(delayRef.current);

        delayRef.current = setTimeout(() => {
          isFunctionThanCall(props.onClick, ev);

          setIsToastOpen(true);
        }, 100);
      }}
    />
  );
};

const ToastAction = ({ variants, className, children, ...props }) => {
  const { style } = variants;

  return (
    <Toast.Action
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

const ToastClose = ({ variants, className, ...props }) => {
  const { style } = variants;

  return (
    <Toast.Close
      className={cn(style === 'outline' && 'hover:bg-main/20', className)}
      {...props}
    >
      <Cross2Icon />
    </Toast.Close>
  );
};

const ToastTimerbar = ({ variants, className, ...props }) => {
  const { style } = variants;

  return (
    <Timerbar
      className={cn(
        'absolute bottom-0 left-0',
        style !== 'outline' && '[--main:--content]',
        className,
      )}
      duration={TOAST_DURATION}
      variants={{
        color: 'inherit',
        size: 'xs',
      }}
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar>
  );
};

export default ToastDemoDeclarative;
