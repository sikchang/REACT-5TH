import { memo, type ButtonHTMLAttributes } from 'react';
import S from "./style.module.css";

function CountButton_({ children, onUpdate, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement> &
{
  // onUpdate는 CountButton_ 컴포넌트가 클릭되었을 때 호출되는 함수입니다.
  // 이 컴포넌트는 버튼 역할을 하며, 클릭 시 onUpdate 함수를 실행합니다.

  // restProps는 ButtonHTMLAttributes에서 상속받은 모든 속성을 포함합니다.
  // 예를 들어, disabled, title, aria-label 등 다양한 HTML 버튼 속성을 사용할 수 있습니다.
  onUpdate: () => void;
}) {
  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
      onClick={onUpdate}>
      {children}
    </button>
  );
}
export default memo(CountButton_)
