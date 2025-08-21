import { TaskProvider } from '@/miniApp/TaskManager/@context'
import PinnedTaskList from '@/miniApp/TaskManager/PinnedTaskList'
import UnPinnedTaskList from '@/miniApp/TaskManager/UnPinnedTaskList'
import tw from '@/utils/tw'

function TaskManager_({className}: {className:string}) {
  return (
    <TaskProvider>
      <div
        lang="en"
        className={tw(
          "w-72 flex flex-col gap-2 p-5 border border-accent rounded text-accent",
          className
        )}>
        <PinnedTaskList />
        <UnPinnedTaskList />
      </div>
    </TaskProvider>
  );
}
export default TaskManager_
