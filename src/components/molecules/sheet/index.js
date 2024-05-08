import SheetAction from './Action';
import SheetActions from './Actions';
import SheetClose from './Close';
import SheetContent from './Content';
import SheetDescription from './Description';
import SheetHeader from './Header';
import SheetOverlay from './Overlay';
import SheetPortal from './Portal';
import SheetRoot from './Root';
import SheetTitle from './Title';
import SheetTrigger from './Trigger';
export * from './variants'

const Sheet = {
  Root: SheetRoot,
  Action: SheetAction,
  Actions: SheetActions,
  Close: SheetClose,
  Content: SheetContent,
  Description: SheetDescription,
  Header: SheetHeader,
  Overlay: SheetOverlay,
  Portal: SheetPortal,
  Title: SheetTitle,
  Trigger: SheetTrigger,
}

export default Sheet;
export {
  SheetRoot,
  SheetAction,
  SheetActions,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
