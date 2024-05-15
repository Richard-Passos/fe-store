import ToastAction from './Action';
import ToastClose from './Close';
import ToastDescription from './Description';
import ToastHeader from './Header';
import ToastProvider from './Provider';
import ToastRoot from './Root';
import ToastTimerbar from './Timerbar';
import ToastTitle from './Title';
import ToastViewport from './Viewport';

const Toast = {
  Root: ToastRoot,
  Action: ToastAction,
  Close: ToastClose,
  Description: ToastDescription,
  Header: ToastHeader,
  Provider: ToastProvider,
  Timerbar: ToastTimerbar,
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
  ToastProvider,
  ToastTimerbar,
  ToastTitle,
  ToastViewport
};
