import Button from "@/components/ui/Button";
import {
  CalendarClock,
  ChevronRight,
  CornerDownRight,
  Ellipsis,
  GripVertical,
  MessageSquare,
  PenLine,
} from "lucide-react";
import type React from "react";

interface TaskItemProps {
  showTaskItem: boolean;
  setShowTaskItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskItem = ({ showTaskItem, setShowTaskItem }: TaskItemProps) => {
  return (
    <div className="relative border-b bg-transparent border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
      <Button
        variant="ghost"
        color="secondary"
        className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
      >
        <GripVertical />
      </Button>
      <div className="flex items-start gap-2 p-1 item-2">
        <Button
          variant="ghost"
          color="secondary"
          className=""
          onClick={() => setShowTaskItem((prev) => !prev)}
        >
          <ChevronRight
            strokeWidth={1}
            className={`${showTaskItem ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
          />
        </Button>
        <div className="flex items-start gap-2 pt-1">
          <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-0">
              <h2 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                <CornerDownRight
                  size={14}
                  strokeWidth={1}
                  className="shrink-0"
                />
                <span className="grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis voluptas explicabo odio itaque possimus, quasi
                  laudantium quam quaerat sequi corrupti?
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-14 h-4 bg-neutral-800"></div>
              <div className="w-12 h-4 bg-neutral-800"></div>
              <div className="w-10 h-4 bg-neutral-800"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
        <Button variant="ghost" color="secondary" iconSize="sm">
          <PenLine />
        </Button>
        <Button variant="ghost" color="secondary" iconSize="sm">
          <CalendarClock />
        </Button>
        <Button variant="ghost" color="secondary" iconSize="sm">
          <MessageSquare />
        </Button>
        <Button variant="ghost" color="secondary" iconSize="sm">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
