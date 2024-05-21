import ToastAction from './Action';
import ToastClose from './Close';
import ToastDescription from './Description';
import ToastHeader from './Header';
import ToastRoot from './Root';
import ToastTitle from './Title';
import ToastViewport from './Viewport';

const Toast = {
  Root: ToastRoot,
  Action: ToastAction,
  Close: ToastClose,
  Description: ToastDescription,
  Header: ToastHeader,
  Title: ToastTitle,
  Viewport: ToastViewport
};

export default Toast;
export {
  ToastRoot,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastHeader,
  ToastTitle,
  ToastViewport
};
