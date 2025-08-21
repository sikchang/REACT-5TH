/*
action creator

redux 오래된 전통적인 패턴

자동완성/타입추론/유지보수에 좋다.

action creator + reducer + context(methods 래핑)

RTK (Redux ToolKit) => createSlice({
  name:'task',
  initialState: INITIAL_TASK,
  reducers: {
    addTask: {...addTask},
    deleteTask: {...deleteTask},
    setTask: {...setTask},
    togglePin: {...togglePin}
  }
})
*/

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPin: boolean;
};

export type State = Task[];

export const ACTION_TYPES = {
  ADD_TASK: "테스크 추가",
  SET_TASK: "테스크 토글",
  TOGGLE_PIN: "핀 토글",
  DELETE_TASK: "테스크 삭제",
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ActionType = (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];

/* ----------------------------------- */
export type AddTaskAction = {
  type: typeof ACTION_TYPES.ADD_TASK;
  payload: string; // nextStep
};

export const addTask = (nextStep: string): AddTaskAction => ({
  type: ACTION_TYPES.ADD_TASK,
  payload: nextStep,
});

/* ----------------------------------- */

export type DeleteTaskAction = {
  type: typeof ACTION_TYPES.DELETE_TASK;
  payload: string; // taskId
};

export const deleteTask = (deleteId: string): DeleteTaskAction => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: deleteId,
});

/* ----------------------------------- */

export type TogglePinAction = {
  type: typeof ACTION_TYPES.TOGGLE_PIN;
  payload: string; // taskId
};

export const togglePin = (taskId: string): TogglePinAction => ({
  type: ACTION_TYPES.TOGGLE_PIN,
  payload: taskId,
});

/* ----------------------------------- */

export type SetTaskAction = {
  type: typeof ACTION_TYPES.SET_TASK;
  payload: { taskId: string; isCompleted: boolean };
};

export const setTask = (
  taskId: string,
  isCompleted: boolean
): SetTaskAction => ({
  type: ACTION_TYPES.SET_TASK,
  payload: { taskId, isCompleted },
});

/* ----------------------------------- */

// 원래라면 데이터 fetch해서 가져온다.
export const INITIAL_TASK: State = [
  {
    id: "5caf0a43-f229-40ad-aca8-4fe948d84cde",
    content: "Context + Reducer",
    isCompleted: false,
    isPin: false,
  },
  {
    id: "6903ef20-3a3b-49a7-8cdf-eb2169c3ca6f",
    content: "Zustand",
    isCompleted: false,
    isPin: false,
  },
];

type Action =
  | { type: typeof ACTION_TYPES.ADD_TASK; payload: string }
  | { type: typeof ACTION_TYPES.DELETE_TASK; payload: string } // task id
  | { type: typeof ACTION_TYPES.TOGGLE_PIN; payload: string } // task id
  | {
      type: typeof ACTION_TYPES.SET_TASK;
      payload: { taskId: string; isCompleted: boolean };
    }; // { task id, isCompleted }

export default function reducer(state: State, action: Action): State {
  // 추가
  // 제거
  // 업데이트

  switch (action.type) {
    // 추가
    case ACTION_TYPES.ADD_TASK: {
      // 테스크 생성
      const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPin: false,
      };

      // 테스크 병합
      const nextState = [newTask, ...state];

      return nextState; // 테스크(배열) 리턴
    }

    // 제거
    // dispatch({type:ACTION_TYPES.DELETE_TASK, payload: '대충 아이디'})
    case ACTION_TYPES.DELETE_TASK: {
      const deleteId = action.payload; // 삭제할 아이디
      const nextState = state.filter((task) => task.id !== deleteId);
      return nextState;
    }

    // 핀 토글
    case ACTION_TYPES.TOGGLE_PIN: {
      const taskId = action.payload;

      const nextState = state.map((task) => {
        if (task.id === taskId) {
          const nextTask = { ...task, isPin: !task.isPin }; // 핀 토글
          return nextTask; // 핀 토글한 테스크만 리턴
        }
        return task; // 핀 토글하지 않은 테스크는 그대로 리턴
      });
      return nextState; // 모든 테스크 리턴
    }

    // 체크 토글
    // dispatch({ type: ACTION_TYPES.SET_TASK, payload: {taskId:string, isCompleted:boolean} })
    case ACTION_TYPES.SET_TASK: {
      const { taskId, isCompleted } = action.payload;

      const nextState = state.map((task) => {
        if (task.id === taskId) {
          const nextTask = { ...task, isCompleted }; // 체크 토글
          return nextTask; // 체크 토글한 테스크만 리턴
        }
        return task; // 체크 토글하지 않은 테스크는 그대로 리턴
      });
      return nextState; // 모든 테스크 리턴
    }
  }
}
