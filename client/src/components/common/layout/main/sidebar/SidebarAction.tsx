import Button from "@/components/ui/Button";
import { UsersRound } from "lucide-react";
import AddTaskButton from "./AddTaskButton";

const SidebarAction = () => {
  return (
    <div className="w-8 md:w-full h-fit bg-surface border border-surface-border rounded-lg flex flex-col items-center md:items-stretch gap-1 p-1 md:p-2">
      <AddTaskButton />
      <Button
        variant="ghost"
        color="secondary"
        className="md:justify-start rounded-md [&_svg]:size-4 md:[&_svg]:size-5 shrink-0 [&_svg]:shrink-0 size-6 md:size-auto"
      >
        <UsersRound strokeWidth={1.5} />
        <span className="text-sm/5 hidden md:inline-block font-normal">
          Add team
        </span>
      </Button>
    </div>
  );
};

export default SidebarAction;
