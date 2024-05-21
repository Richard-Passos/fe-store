import SelectArrow from './Arrow';
import SelectContent from './Content';
import SelectGroup from './Group';
import SelectLabel from './Label';
import SelectPortal from './Portal';
import SelectRoot from './Root';
import SelectSeparator from './Separator';
import SelectTrigger from './Trigger';
import SelectValue from './Value';
import SelectViewport from './Viewport';
import SelectItem from './item';
import SelectScrollAction from './scroll-action';

const Select = {
  Root: SelectRoot,
  Content: SelectArrow,
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  Portal: SelectPortal,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Viewport: SelectViewport,
  ScrollAction: SelectScrollAction
};

export default Select;
export {
  SelectRoot,
  SelectArrow,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SelectScrollAction
};
