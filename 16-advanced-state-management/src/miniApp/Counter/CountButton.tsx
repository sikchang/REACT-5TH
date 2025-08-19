import { memo, type ButtonHTMLAttributes } from 'react';
import S from "./style.module.css";

function CountButton({ children, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
    >
      {children}
    </button>
  );
}
export default memo(CountButton)
