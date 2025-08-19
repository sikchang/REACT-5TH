

import { create } from 'zustand';

type Store = {
  count: number;
  step: number;
  max: number;
  min: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (newStep: number) => void;
}

// create()() : 커링펑션
// 왜 커링펑션을 사용하냐면, 상태를 업데이트하는 함수를 쉽게 만들 수 있기 때문입니다.
// 여기서 crud를 다 한다 set, get, store: 가지고 있는 모든 것을 열 수 있는 것
// export const useCounterStore = create<Store>()((set) => ({
//   count: 1,
//   step: 1,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }))


export const useCounterStore = create<Store>()((set, _get, store) => {

  const increment = () => {
    set(({ count, step, max }) => {
      let nextCount = count + step;
      if (nextCount >= max) nextCount = max;
      return { count: nextCount };
    });
  };

  const decrement = () => {
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });
  };

  const setStep = (newStep: number) => {
    set({ step: newStep });
  };

  const reset = () => store.getInitialState();

  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    reset,
    setStep,
  };
});

