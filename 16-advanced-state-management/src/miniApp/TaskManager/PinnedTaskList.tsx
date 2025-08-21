import { useTask } from '@/miniApp/TaskManager/@context';
import tw from '@/utils/tw';
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from 'react-icons/rx'

function PinnedTaskList() {
  const {
    pinnedTaskList,
    methods: { setTask, togglePin, deleteTask }
  } = useTask();

  const handleSetTask = (taskId: string, isCompleted: boolean) => {
    setTask(taskId, isCompleted);
  };

  const handleTogglePin = (taskId: string) => {
    togglePin(taskId);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
  };

  return (
    <ul className="flex flex-col gap-6">
      {pinnedTaskList.map((task) => (
        <li key={task.id} className="flex justify-between gap-1.5">
          <label className={tw("flex gap-1", task.isCompleted && "line-through")}>
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
  )
}
export default PinnedTaskList
