import { toast, ToastOptions, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOAST_CONFIG: ToastOptions = {
  position: 'bottom-right' as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const ToastNotifier = {
  success: (message = '💌Hvala! Vaša poruka je uspješno poslana.') => {
    toast.success(message, TOAST_CONFIG);
  },
  warning: (message = '⚠️ Pažnja! Provjerite podatke.') => {
    toast.warning(message, TOAST_CONFIG);
  },
  error: (message = '❌ Došlo je do greške.') => {
    toast.error(message, TOAST_CONFIG);
  },
};
