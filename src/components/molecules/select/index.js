import SelectContent from './Content';
import SelectItem from './Item';
import SelectPortal from './Portal';
import SelectRoot from './Root';
import SelectTrigger from './Trigger';

export * from './variants';

const Select = {
  Root: SelectRoot,
  Content: SelectContent,
  Item: SelectItem,
  Portal: SelectPortal,
  Trigger: SelectTrigger
};

export default Select;
export { SelectRoot, SelectContent, SelectItem, SelectPortal, SelectTrigger };
