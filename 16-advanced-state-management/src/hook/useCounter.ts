import { useCallback, useState } from 'react';





function useCounter({
  initialCount = 0,
  step = 1,
  min = 0,
  max = 10,
} = {}) {
  // 상태 생성
  const [count, setCount] = useState(initialCount)

  const isMinDisabled = count <= min
  const isMaxDisabled = count >= max

  const reset = useCallback(() => setCount(initialCount), [initialCount]);

  const increment = useCallback(() => setCount((c) => {
    let nextCount = c + step;
    if (nextCount >= max) nextCount = max;
    return nextCount;
  }),
    [step, max]
  );


  const decrement = useCallback(() => setCount((c) => {
    let nextCount = c - step;
    if (nextCount <= min) nextCount = min;
    return nextCount;
  }),
    [step, min]
  );

  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  }
}

export default useCounter;





















