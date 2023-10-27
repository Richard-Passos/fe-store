import { CheckIcon, ChevronDown, ChevronUp } from 'lucide-react';

import { Select } from '@/components/ui';
import { cn } from '@/utils';

const HomeView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds justify-center pt-48',
        className,
      )}
      {...props}
    >
      <Select>
        <Select.Trigger className='w-44'>
          <Select.Value placeholder='Select a fruit…' />

          <Select.Icon
            asChild
            className='transition-transform group-data-open:rotate-180'
          >
            <ChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content>
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

              <Select.Separator />

              <Select.Group>
                <Select.Label>Fruits</Select.Label>

                <SelectItem value='1'>Apple</SelectItem>

                <SelectItem value='2'>Banana</SelectItem>

                <SelectItem value='3'>Blueberry</SelectItem>

                <SelectItem value='4'>Grapes</SelectItem>

                <SelectItem value='5'>Pineapple</SelectItem>
              </Select.Group>

              <Select.Separator />

              <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <SelectItem value='6'>Aubergine</SelectItem>

                <SelectItem value='7'>Broccoli</SelectItem>

                <SelectItem
                  disabled
                  value='8'
                >
                  Carrot
                </SelectItem>

                <SelectItem value='9'>Courgette</SelectItem>

                <SelectItem value='10'>Leek</SelectItem>
              </Select.Group>

              <Select.Separator />

              <Select.Group>
                <Select.Label>Meat</Select.Label>

                <SelectItem value='11'>Beef</SelectItem>

                <SelectItem value='12'>Chicken</SelectItem>

                <SelectItem value='13'>Lamb</SelectItem>

                <SelectItem value='14'>Pork</SelectItem>
              </Select.Group>
            </Select.Viewport>

            <Select.ScrollButton.Up>
              <ChevronUp className='h-3.5 w-3.5' />
            </Select.ScrollButton.Up>

            <Select.ScrollButton.Down>
              <ChevronDown className='h-3.5 w-3.5' />
            </Select.ScrollButton.Down>
          </Select.Content>
        </Select.Portal>
      </Select>
    </main>
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

export default HomeView;
