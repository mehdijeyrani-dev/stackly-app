import useDocumentTitle from "@/hooks/useDocumentTitle";
import { DragDropProvider, useDraggable, useDroppable } from "@dnd-kit/react";
import React, { useState } from "react";

type ColumnId = "todo" | "in-progress" | "completed";

interface Task {
  id: string;
  title: string;
  columnId: ColumnId;
}

const columns: { id: ColumnId; title: string }[] = [
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "In Progress" },
  { id: "completed", title: "Completed" },
];

const initialTasks: Task[] = [
  { id: "task-1", title: "Learn React", columnId: "todo" },
  { id: "task-2", title: "Learn TypeScript", columnId: "todo" },
  {
    id: "task-3",
    title: "Build SearchBox",
    columnId: "in-progress",
  },
];

const TaskCard = ({ task }: { task: Task }) => {
  const { ref, isDragging } = useDraggable({
    id: task.id,
  });

  return (
    <div
      ref={ref}
      style={{
        padding: "12px",
        borderRadius: "8px",
        background: isDragging ? "#dbeafe" : "white",
        border: "1px solid #d4d4d4",
        cursor: "grab",
        opacity: isDragging ? 0.6 : 1,
      }}
    >
      {task.title}
    </div>
  );
};

const TaskColumn = ({
  column,
  tasks,
}: {
  column: (typeof columns)[number];
  tasks: Task[];
}) => {
  const { ref, isDropTarget } = useDroppable({
    id: `column:${column.id}`,
  });

  return (
    <section
      ref={ref}
      style={{
        minWidth: "200px",
        minHeight: "240px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "10px",
        background: isDropTarget ? "#dbeafe" : "#f5f5f5",
        border: "2px dashed #d4d4d4",
      }}
    >
      <h3>{column.title}</h3>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      {tasks.length === 0 && <p style={{ color: "#737373" }}>Drop task here</p>}
    </section>
  );
};

const Upcoming = () => {
  useDocumentTitle("Upcoming")
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function handleDragEnd(
    event: Parameters<
      NonNullable<React.ComponentProps<typeof DragDropProvider>["onDragEnd"]>
    >[0],
  ) {
    if (event.canceled) return;

    const sourceId = event.operation.source?.id;
    const targetId = event.operation.target?.id;

    if (typeof sourceId !== "string" || typeof targetId !== "string") return;

    if (!tasks.some((task) => task.id === sourceId)) return;

    if (!targetId.startsWith("column:")) {
      return;
    }

    const columnId = targetId.slice("column:".length);

    if (!columns.some((column) => column.id === columnId)) return;

    setTasks((currentTask) =>
      currentTask.map((task) =>
        task.id === sourceId
          ? { ...task, columnId: columnId as ColumnId }
          : task,
      ),
    );
  }

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
          gap: "16px",
          padding: "24px",
          alignItems: "start",
        }}
      >
        {columns.map((column) => (
          <TaskColumn
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.columnId === column.id)}
          />
        ))}
      </main>
      <div className="w-96 h-96 bg-surface">test</div>
    </DragDropProvider>
  );
};

export default Upcoming;
