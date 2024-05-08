import ToastAction from './Action';
import ToastClose from './Close';
import ToastDescription from './Description';
import ToastHeader from './Header';
import ToastIcon from './Icon';
import ToastProvider from './Provider';
import ToastRoot from './Root';
import ToastTitle from './Title';
import ToastViewport from './Viewport';
export * from './variants'

const Toast = {
  Root: ToastRoot,
  Action: ToastAction,
  Close: ToastClose,
  Description: ToastDescription,
  Header: ToastHeader,
  Icon: ToastIcon,
  Provider: ToastProvider,
  Title: ToastTitle,
  Viewport: ToastViewport,
}

export default Toast;
export {
  ToastRoot,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastHeader,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
};
