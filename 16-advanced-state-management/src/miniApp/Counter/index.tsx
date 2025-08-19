import tw from '@/utils/tw';
import S from './style.module.css'
import { memo, useMemo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import CountDisplay from './CountDisplay';
import CountButton from './CountButton';


interface Props {
  className?: string;
}

function Counter({ className }: Props) {

  const step = 1;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  return (
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role='group' className={S.group}>
        <CountButton
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={false}
        >
          {useMemo(() => <GrFormUp />, [])}
        </CountButton>

        <CountButton
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={false}
        >
          {useMemo(() => <GrFormDown />, [])}
        </CountButton>
      </div>
    </div>
  )
}
export default memo(Counter) /* 부모 렌더링 최적화 : memo */







