import tw from '@/utils/tw';
import S from './style.module.css'
import { memo, useMemo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import CountDisplay_ from '@/miniApp/Counter/CountDisplay_';
import CountButton_ from '@/miniApp/Counter/CountButton_';
import useCounter from '@/hook/useCounter';


interface Props {
  className?: string;
}

function Counter_({ className }: Props) {

  const C = useCounter();

  const { count, step, isMaxDisabled, isMinDisabled, increment, decrement } = C;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  return (
    <div className={tw(S.component, className)}>
      <CountDisplay_ count={count} />
      <div role='group' className={S.group}>
        <CountButton_
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
          onUpdate={increment}
        >
          {useMemo(() => <GrFormUp />, [])}
        </CountButton_>

        <CountButton_
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
          onUpdate={decrement}
        >
          {useMemo(() => <GrFormDown />, [])}
        </CountButton_>
      </div>
    </div>
  )
}
export default memo(Counter_) /* 부모 렌더링 최적화 : memo */







