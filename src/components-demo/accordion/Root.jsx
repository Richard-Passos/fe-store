import { ChevronDownIcon } from '@radix-ui/react-icons';

import { ListComponent, Accordion } from '@/components/molecules';

const AccordionDemo = ({ variants = {}, lassName, ...props }) => {
  return (
    <ListComponent.Root {...props}>
      {variants.map((variants) => (
        <ListComponent.Item key={Object.entries(variants).join()}>
          <ListComponent.Subtitle variants={variants} />

          <Accordion.Root {...variants}>
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
          </Accordion.Root>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
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
