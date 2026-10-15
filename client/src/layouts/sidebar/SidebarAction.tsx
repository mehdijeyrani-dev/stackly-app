import Button from "@/components/ui/Button";
import { PlusCircle, UsersRound } from "lucide-react";

const SidebarAction = () => {
  return (
    <div className="w-10 h-fit md:w-full bg-neutral-800 shrink-0 flex flex-col items-center justify-center md:items-start gap-1 p-1 md:p-2 border border-neutral-700 rounded-md">
      <Button
        variant="ghost"
        color="primary"
        size="icon"
        radius="sm"
        className="md:w-full md:h-fit md:justify-start md:px-2 md:py-1 shrink-0 aspect-square md:aspect-auto text-blue-600 hover:text-blue-500 hover:bg-blue-900/20"
      >
        <PlusCircle size={20} />
        <span className="font-semibold hidden md:inline-block md:text-base">
          Add task
        </span>
      </Button>
      <Button
        variant="ghost"
        color="secondary"
        size="icon"
        radius="sm"
        className="md:w-full md:h-fit md:justify-start md:px-2 md:py-1 shrink-0 aspect-square md:aspect-auto"
      >
        <UsersRound size={20} strokeWidth={1} />
        <span className="hidden md:inline-block md:text-base font-normal">
          Add team
        </span>
      </Button>
    </div>
  );
};

export default SidebarAction;
