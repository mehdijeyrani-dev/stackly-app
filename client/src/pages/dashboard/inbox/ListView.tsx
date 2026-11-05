import { useEffect, useState } from "react";
import { useSortable, isSortable } from "@dnd-kit/react/sortable";
import { DragDropProvider } from "@dnd-kit/react";

type StatusGroupProps = {
  id: string;
  index: number;
  title: string;
};

const StatusGroup = ({ id, index, title }: StatusGroupProps) => {
  const { ref, isDragging } = useSortable({
    id,
    index,
  });

  return (
    <div
      ref={ref}
      className="w-11/12 mx-auto h-fit bg-red-600 shrink-0 last:bg-purple-700 relative"
    >
      <div className="w-full h-10 bg-fuchsia-800 peer">
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="size-8 bg-green-700 absolute top-1 right-full mr-1 opacity-0 peer-hover:opacity-100 hover:opacity-100"></div>
      {/* Tasks */}
      <div className="w-[95%] ml-auto h-auto flex flex-col gap-2">
        {Array.from({ length: 2 }).map((_, j) => (
          <div key={j} className="w-full h-auto bg-blue-800 relative">
            <div className="w-full bg-white h-20 peer"></div>
            <div className="size-8 bg-green-700 absolute top-1 right-full mr-1 opacity-0 peer-hover:opacity-100 hover:opacity-100"></div>
            {/* Tasks */}
            <div className="w-[95%] ml-auto h-auto flex flex-col gap-2">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="w-full h-auto bg-blue-800 relative">
                  <div className="w-full h-20 bg-black peer"></div>
                  <div className="size-8 bg-green-900 absolute top-1 right-full mr-1 opacity-0 peer-hover:opacity-100 hover:opacity-100"></div>
                  {/* Tasks */}
                  <div className="w-[95%] ml-auto h-auto flex flex-col gap-2">
                    {Array.from({ length: 2 }).map((_, k) => (
                      <div
                        key={k}
                        className="w-full h-auto bg-blue-800 relative"
                      >
                        <div className="w-full h-20 bg-green-400 peer"></div>
                        <div className="size-8 bg-green-900 absolute top-1 right-full mr-1 opacity-0 peer-hover:opacity-100 hover:opacity-100"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type Status = {
  id: string;
  title: string;
};

const ListView = () => {
  const [statuses, setStatuses] = useState<Status[]>(() => {
    const savedStatuses = localStorage.getItem("statuses");

    if (savedStatuses) {
      try {
        return JSON.parse(savedStatuses);
      } catch {}
    }

    return [
      { id: "todo", title: "Todo" },
      { id: "in-progress", title: "In Progress" },
      { id: "completed", title: "Completed" },
      { id: "no-status", title: "No Status" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("statuses", JSON.stringify(statuses));
  }, [statuses]);

  return (
    <div className="flex-1 bg-yellow-500 w-full max-w-5xl mx-auto flex flex-col gap-2 py-2">
      <DragDropProvider
        onDragEnd={(event) => {
          const { source } = event.operation;

          if (isSortable(source)) {
            const { initialIndex, index } = source;

            setStatuses((items) => {
              const newItems = [...items];
              const [movedItem] = newItems.splice(initialIndex, 1);

              newItems.splice(index, 0, movedItem);

              return newItems;
            });
          }
        }}
      >
        {statuses.map((status, index) => (
          <StatusGroup
            key={status.id}
            id={status.id}
            index={index}
            title={status.title}
          />
        ))}
      </DragDropProvider>
    </div>
  );
};

export default ListView;
