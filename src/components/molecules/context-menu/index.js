import ContextMenuCheckboxItem from './CheckboxItem';
import ContextMenuContent from './Content';
import ContextMenuGroup from './Group';
import ContextMenuItem from './Item';
import ContextMenuItemIndicator from './ItemIndicator';
import ContextMenuLabel from './Label';
import ContextMenuPortal from './Portal';
import ContextMenuRadioGroup from './RadioGroup';
import ContextMenuRadioItem from './RadioItem';
import ContextMenuRoot from './Root';
import ContextMenuSeparator from './Separator';
import ContextMenuTrigger from './Trigger';
import ContextMenuSub from './sub';

export * from './variants';

const ContextMenu = {
  Root: ContextMenuRoot,
  CheckboxItem: ContextMenuCheckboxItem,
  Content: ContextMenuContent,
  Group: ContextMenuGroup,
  Item: ContextMenuItem,
  ItemIndicator: ContextMenuItem,
  Label: ContextMenuLabel,
  Portal: ContextMenuPortal,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Separator: ContextMenuSeparator,
  Trigger: ContextMenuTrigger,
  Sub: ContextMenuSub
};

export default ContextMenu;
export {
  ContextMenuRoot,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuSub
};
