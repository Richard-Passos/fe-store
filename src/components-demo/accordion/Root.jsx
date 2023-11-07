import { ChevronDownIcon } from '@radix-ui/react-icons';

import { ListComponent } from '@/components';
import { Accordion } from '@/components/ui';

const ACCORDION_VARIANTS = [
  { type: 'single', collapsible: true },
  { type: 'single', collapsible: false },
  { type: 'single', defaultValue: 'item-1' },
  { type: 'multiple' },
  { type: 'multiple', defaultValue: ['item-1', 'item-2'] },
];

const AccordionDemo = ({ className, ...props }) => {
  return (
    <ListComponent {...props}>
      {ACCORDION_VARIANTS.map((variants) => (
        <ListComponent.Item key={Object.entries(variants).join()}>
          <ListComponent.Subtitle variants={variants} />

          <Accordion {...variants}>
            <Accordion.Item value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>

              <Accordion.Content>
                Yes. It adheres to the WAI-ARIA design pattern.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='item-2'>
              <AccordionTrigger>Is it styled?</AccordionTrigger>

              <Accordion.Content>
                Yes. It comes with default styles that matches the other
                components aesthetic.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='item-3'>
              <AccordionTrigger>Is it animated?</AccordionTrigger>

              <Accordion.Content>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

const AccordionTrigger = ({ children, ...props }) => {
  return (
    <Accordion.Header {...props}>
      <Accordion.Trigger>
        {children}

        <ChevronDownIcon
          aria-hidden
          className='h-4 w-4 transition-transform duration-300 group-data-open:rotate-180'
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export default AccordionDemo;
