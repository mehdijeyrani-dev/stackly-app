import {
  CalendarDays,
  ChevronRight,
  Ellipsis,
  GripVertical,
  Hash,
  Workflow,
} from "lucide-react";

const TaskDetails = () => (
  <>
    <div className="flex gap-2">
      <div className="mt-1 shrink-0">
        <div className="w-4 h-4 rounded-full bg-rose-600/10 outline outline-rose-600" />
      </div>

      <div className="flex min-w-0 flex-col gap-0.5 pb-2">
        <h2 className="leading-5 line-clamp-1">
          Add support for important task details such as descriptions,
          priorities, due dates, reminders, labels, and project assignments.
        </h2>

        <p className="text-xs text-neutral-400 line-clamp-1">
          Add support for important task details such as descriptions,
          priorities, due dates, reminders, labels, and project assignments.
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <div className="inline-flex items-center gap-0.5 rounded-sm bg-green-600/15 px-1 py-0.5 text-green-700">
            <CalendarDays size={14} strokeWidth={1.5} />
            <span className="text-xs">Aug 18, 2030</span>
          </div>

          <div className="inline-flex items-center gap-0.5 rounded-sm bg-neutral-100 px-1 py-0.5 text-neutral-600">
            <Workflow size={14} strokeWidth={1.5} />
            <span className="text-xs">4/10</span>
          </div>

          {["ui", "design", "project"].map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center gap-0.5 rounded-sm bg-neutral-100 px-1 py-0.5 text-neutral-600"
            >
              <Hash size={14} strokeWidth={1.5} />
              <span className="text-xs">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const DragHandle = () => (
  <button
    type="button"
    aria-label="Reorder task"
    className="absolute right-full top-1 mr-2 shrink-0 rounded-sm bg-neutral-200 p-1 opacity-0 transition-opacity group-hover/task:opacity-100"
  >
    <GripVertical size={14} />
  </button>
);

const ListView = () => {
  return (
    <div className="mt-2 w-full min-h-0 flex-1 overflow-y-auto scrollbar-thin">
      <div className="mx-auto flex w-9/12 flex-col gap-2">
        {/* Status */}
        <div>
          <div className="group/status relative flex items-center gap-2">
            <button
              type="button"
              aria-label="Reorder status"
              className="absolute right-full mr-2 shrink-0 rounded-sm bg-neutral-200 p-1 opacity-0 transition-opacity group-hover/status:opacity-100"
            >
              <GripVertical size={14} />
            </button>

            <div className="flex flex-1 items-center gap-2 rounded-t-md border-b border-neutral-300 bg-neutral-50 p-2">
              <button type="button" className="rounded-sm bg-neutral-200 p-1">
                <ChevronRight size={14} />
              </button>

              <div className="inline-flex items-baseline gap-4">
                <span className="font-semibold">To do</span>
                <span className="text-xs font-medium text-neutral-500">
                  10
                </span>
              </div>

              <button
                type="button"
                aria-label="Status options"
                className="ml-auto rounded-sm bg-neutral-200 p-1"
              >
                <Ellipsis size={14} />
              </button>
            </div>
          </div>

          {/* Parent task */}
          <div className="group/task relative ml-10 mt-1">
            <DragHandle />

            <div className="rounded-md bg-white px-2">
              <TaskDetails />

              {/* Child task */}
              <div className="group/task relative ml-12 w-[calc(100% - 3rem)]">
                <DragHandle />

                <div className="rounded-md bg-white py-1">
                  <TaskDetails />

                  {/* Grandchild task */}
                  <div className="group/task relative ml-12 w-[calc(100% - 3rem)]">
                    <DragHandle />

                    <div className="rounded-md bg-white py-1">
                      <TaskDetails />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Another independent parent task */}
          <div className="group/task relative ml-10 mt-1">
            <DragHandle />

            <div className="rounded-md bg-white px-2">
              <TaskDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;