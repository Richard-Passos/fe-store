import ContextMenuContent from './Content';
import ContextMenuGroup from './Group';
import ContextMenuLabel from './Label';
import ContextMenuPortal from './Portal';
import ContextMenuRadioGroup from './RadioGroup';
import ContextMenuRoot from './Root';
import ContextMenuSeparator from './Separator';
import ContextMenuTrigger from './Trigger';
import ContextMenuItem from './item';
import ContextMenuSub from './sub';

const ContextMenu = {
  Root: ContextMenuRoot,
  Content: ContextMenuContent,
  Group: ContextMenuGroup,
  Item: ContextMenuItem,
  Label: ContextMenuLabel,
  Portal: ContextMenuPortal,
  RadioGroup: ContextMenuRadioGroup,
  Separator: ContextMenuSeparator,
  Trigger: ContextMenuTrigger,
  Sub: ContextMenuSub
};

export default ContextMenu;
export {
  ContextMenuRoot,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuSub
};
