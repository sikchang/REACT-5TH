import { memo, type ButtonHTMLAttributes } from 'react';
import S from "./style.module.css";
import { useCounterStore } from '@/miniApp/Counter/@store';

function CountButton({ children, type = "+", ...restProps }: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: '-' | '+'
}) {

  // store의 전체 값을 구독 내가 필요없는 항목이 업데이트가 되면 리-렌더링 발생
  // const { increment, decrement } = useCounterStore();
  // let handler = increment;
  // if(type === '-') handler = decrement;

  // store의 필요한 값만 구독 내가 필요없는 항목이 업데이트가 되면 리-렌더링이 발생하지 않음
  const handler = useCounterStore((s) =>
    type === '+' ? s.increment : s.decrement
  )

  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
      // onClick={type === "+" ? increment : decrement}
      onClick={handler}>
      {children}
    </button>
  );
}
export default memo(CountButton)
