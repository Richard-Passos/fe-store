import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

import ListComponent from '@/components/list-component';
import { Select } from '@/components/ui';

const SELECT_VARIANTS = [{ position: 'popper' }, { position: 'item-aligned' }];

const SelectDemo = (props) => {
  return (
    <ListComponent {...props}>
      {SELECT_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-[theme(spacing.56)]'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <SelectComp variants={variants} />
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

const SelectComp = ({ variants, ...props }) => {
  return (
    <Select {...props}>
      <Select.Trigger>
        <Select.Value placeholder='Select a fruit…' />

        <Select.Icon
          asChild
          className='transition-transform duration-300 group-data-open:rotate-180'
        >
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content {...variants}>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>

              <SelectItem value='apple'>Apple</SelectItem>

              <SelectItem value='banana'>Banana</SelectItem>

              <SelectItem value='blueberry'>Blueberry</SelectItem>

              <SelectItem value='grapes'>Grapes</SelectItem>

              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Vegetables</Select.Label>

              <SelectItem value='aubergine'>Aubergine</SelectItem>

              <SelectItem value='broccoli'>Broccoli</SelectItem>

              <SelectItem
                disabled
                value='carrot'
              >
                Carrot
              </SelectItem>

              <SelectItem value='courgette'>Courgette</SelectItem>

              <SelectItem value='leek'>Leek</SelectItem>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Meat</Select.Label>

              <SelectItem value='beef'>Beef</SelectItem>

              <SelectItem value='chicken'>Chicken</SelectItem>

              <SelectItem value='lamb'>Lamb</SelectItem>

              <SelectItem value='pork'>Pork</SelectItem>
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollButton.Up>
            <ChevronUpIcon className='h-3.5 w-3.5' />
          </Select.ScrollButton.Up>

          <Select.ScrollButton.Down>
            <ChevronDownIcon className='h-3.5 w-3.5' />
          </Select.ScrollButton.Down>
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};

const SelectItem = ({ children, ...props }) => {
  return (
    <Select.Item {...props}>
      <Select.Item.Text>{children}</Select.Item.Text>

      <Select.Item.Indicator>
        <CheckIcon />
      </Select.Item.Indicator>
    </Select.Item>
  );
};

export default SelectDemo;
