import { taskService } from "@/services/tasks.service";
import type { Task } from "@/types/task.types";
import { useEffect, useState } from "react";

const BoardView = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const result = await taskService.getTasks({
          page: 1,
          limit: 10,
        });

        setTasks(result.tasks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full flex-1 flex flex-col gap-2 overflow-y-auto min-h-0 p-2">
      <h1 className="text-2xl font-semibold">My Tasks</h1>

      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <div className="border border-white/10 p-2 rounded-md" key={task._id}>
            <h3 className="">{task.title}</h3>
            <p className="text-xs text-neutral-500">{task.description}</p>
            <span className={`text-xs px-2 py-0.5 rounded ${task.completed ? "bg-green-500/15 text-green-500" :"bg-yellow-400/10 text-yellow-400"}`}>{task.completed ? "Completed" : "Pending"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardView;
