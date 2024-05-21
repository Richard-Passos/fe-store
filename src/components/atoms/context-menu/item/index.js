import ContextMenuItemCheckbox from './Checkbox';
import ContextMenuItemIndicator from './Indicator';
import ContextMenuItemRadio from './Radio';
import ContextMenuItemRoot from './Root';

const ContextMenuItem = {
  Root: ContextMenuItemRoot,
  Checkbox: ContextMenuItemCheckbox,
  Indicator: ContextMenuItemIndicator,
  Radio: ContextMenuItemRadio
};

export default ContextMenuItem;
export {
  ContextMenuItemRoot,
  ContextMenuItemCheckbox,
  ContextMenuItemIndicator,
  ContextMenuItemRadio
};
