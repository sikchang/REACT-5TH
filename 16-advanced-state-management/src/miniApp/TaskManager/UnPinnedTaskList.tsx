import { useTask } from '@/miniApp/TaskManager/@context';
import tw from '@/utils/tw';
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from 'react-icons/rx'

function UnPinnedTaskList() {

  const {
    unpinnedTaskList,
    methods: { setTask, togglePin, deleteTask }
  } = useTask();

  // const isCompleted = false;
  // const isPin = false;

  const handleSetTask = (taskId: string, isCompleted: boolean) => {
    // TODO: 할 일 설정 로직 구현
    // 예시: data.methods.setTask('할 일 아이디', true);
    setTask(taskId, isCompleted);
  };

  const handleTogglePin = (taskId: string) => {
    // TODO: 핀 토글 로직 구현
    togglePin(taskId);
  };

  const handleDeleteTask = (taskId: string) => {
    // TODO: 할 일 삭제 로직 구현
    deleteTask(taskId);
  };

  /*
  리스트 렌더링, 이벤트 바인딩
  */
  return (
    <ul className="flex flex-col gap-6">
      {unpinnedTaskList.map((task) => (
        <li key={task.id} className="flex justify-between gap-1.5">
          <label
            className={tw("flex gap-1", task.isCompleted && "line-through")}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={(e) => handleSetTask(task.id, (e.target as HTMLInputElement).checked)}
            />
            {task.content}
          </label>
          <div className="flex gap-2">
            <button type="button" onClick={() => handleTogglePin(task.id)}>
              {task.isPin ? <PiPushPinFill /> : <PiPushPinLight />}
            </button>
            <button type="button" onClick={() => handleDeleteTask(task.id)}>
              <RxCross1 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default UnPinnedTaskList
