import Button from "@/components/ui/Button";
import { PlusSquare, UsersRound } from "lucide-react";

const SidebarAction = () => {
  return (
    <div className="w-10 md:w-full bg-surface border border-surface-border rounded-md flex flex-col gap-1 p-1 md:p-2">
      <Button
        variant="outline"
        color="primary"
        className="w-full aspect-square md:aspect-auto rounded-sm p-0 md:px-2.25 md:py-1.5 md:justify-start md:bg-blue-600 md:hover:bg-blue-700 md:text-white"
      >
        <PlusSquare size={20} strokeWidth={2} className="shrink-0" />
        <span className="hidden md:inline-block font-medium leading-5">
          Add task
        </span>
      </Button>
      <Button variant="ghost" color="secondary" className="w-full aspect-square md:aspect-auto rounded-sm p-0 md:px-2.25 md:py-1.5 md:justify-start">
        <UsersRound size={20} strokeWidth={1} className="shrink-0" />
        <span className="hidden md:inline-block font-normal leading-5">
          Add team
        </span>
      </Button>
    </div>
  );
};

export default SidebarAction;
