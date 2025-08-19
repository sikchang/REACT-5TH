import tw from '@/utils/tw';
import S from './style.module.css'
import { memo, useMemo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import CountDisplay from './CountDisplay';
import CountButton from './CountButton';
import { useCounterStore } from "@/miniApp/Counter/@store";
import { useShallow } from 'zustand/shallow';

// Zustand v4+에서 커링펑션을 사용하지 않음
interface Props {
  className?: string;
}

function Counter({ className }: Props) {

  // Zustand v4+에서 이러한 방식이 사용됨.

  // const {step} = useCounterStore();
  const [count, step, min, max] = useCounterStore(
    useShallow((s) => [s.count, s.step, s.min, s.max]) // useShallow를 사용하여 불필요한 렌더링 방지
  );


  // const step = 1;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;



  return (
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role='group' className={S.group}>
        <CountButton
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
        >
          {useMemo(() => <GrFormUp />, [])}
        </CountButton>

        <CountButton
          type='-'
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
        >
          {useMemo(() => <GrFormDown />, [])}
        </CountButton>
      </div>
    </div>
  )
}
export default memo(Counter) /* 부모 렌더링 최적화 : memo */







