import DialogAction from './Action';
import DialogActions from './Actions';
import DialogClose from './Close';
import DialogContent from './Content';
import DialogDescription from './Description';
import DialogHeader from './Header';
import DialogOverlay from './Overlay';
import DialogPortal from './Portal';
import DialogRoot from './Root';
import DialogTitle from './Title';
import DialogTrigger from './Trigger';

const Dialog = {
  Root: DialogRoot,
  Action: DialogAction,
  Actions: DialogActions,
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Header: DialogHeader,
  Overlay: DialogOverlay,
  Portal: DialogPortal,
  Title: DialogTitle,
  Trigger: DialogTrigger,
}

export default Dialog;
export {
  DialogRoot,
  DialogAction,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
