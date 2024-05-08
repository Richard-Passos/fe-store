'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';

import {Toast, ListComponent } from '@/components/molecules';
import { Button, Timerbar } from '@/components/atoms';
import { cn } from '@/utils';

import { TOAST_DURATION } from './Root';
import TOAST from './variants';

const ToastDemoDeclarative = (props) => {
  const [isOpen, setIsOpen] = useState({}),
    [isPaused, setIsPaused] = useState(false);

  return (
    <ListComponent.Root {...props}>
      {TOAST.map((variants) => {
        const { type, color } = variants;

        const isToastOpen = !!isOpen[type]?.[color],
          setIsToastOpen = (toastState) =>
            setIsOpen((state) => ({
              ...state,
              [type]: { ...state[type], [color]: toastState },
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

            <Toast.Root
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
                isPaused={isPaused}
                  variants={variants}
                />
              )}
            </Toast.Root>
          </ListComponent.Item>
        );
      })}
    </ListComponent.Root>
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
          props.onClick?.(ev);

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
          type: 'outline',
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
    <Timerbar.Root
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
    </Timerbar.Root>
  );
};

export default ToastDemoDeclarative;
