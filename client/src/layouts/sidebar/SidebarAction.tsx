import Button from "@/components/ui/Button";
import { PlusSquare, UsersRound } from "lucide-react";

const SidebarAction = () => {
  return (
    <div className="w-10 h-fit md:w-full bg-surface border border-surface-border shrink-0 flex flex-col items-center justify-center md:items-start gap-1 px-0.5 py-1 md:p-2 rounded-lg">
      <Button variant="flat" iconSize="md" className="md:w-full md:justify-start md:p-2 rounded-md bg-transparent text-blue-500 hover:bg-blue-500/10 md:bg-blue-600 md:hover:bg-blue-700 md:text-white">
        <PlusSquare strokeWidth={1.5} />
        <span className="hidden md:inline-block">
          Add task
        </span>
      </Button>
      <Button variant="ghost" color="secondary" iconSize="md" className="md:w-full md:justify-start md:p-2 rounded-md">
        <UsersRound strokeWidth={1} />
        <span className="hidden md:inline-block font-normal">
          Add team
        </span>
      </Button>
    </div>
  );
};

export default SidebarAction;
