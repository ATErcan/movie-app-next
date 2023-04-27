import { Renderable, ToastPosition, toast } from "react-hot-toast";

type basicToastFn = (msg: string, position?: ToastPosition) => void;
type customToastFn = (
  msg: string,
  icon?: Renderable,
  style?: React.CSSProperties,
  duration?: number,
  position?: ToastPosition
) => void;

export const toastSuccess: basicToastFn = (
  msg,
  position= "top-right"
) => {
  toast.success(msg, {
    position: position,
  });
};

export const toastError: basicToastFn = (
  msg,
  position = "top-right"
) => {
  toast.error(msg, {
    position: position,
  });
};

export const customToast: customToastFn = (
  msg,
  icon,
  style,
  duration = 4000,
  position = "top-right"
) => {
  toast(msg, {
    icon: icon,
    duration: duration,
    position: position,
    style: style,
  });
};
