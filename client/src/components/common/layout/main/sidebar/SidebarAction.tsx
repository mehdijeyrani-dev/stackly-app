import Button from "@/components/ui/Button";
import { PlusCircle, UsersRound } from "lucide-react";

const SidebarAction = () => {
  return (
    <div className="w-8 md:w-full h-fit bg-surface border border-surface-border rounded-lg flex flex-col items-center md:items-stretch gap-1 p-1 md:p-2">
      <Button
        variant="outline"
        className="md:justify-start rounded-md [&_svg]:size-4 md:[&_svg]:size-5 shrink-0 [&_svg]:shrink-0 size-6 md:size-auto md:bg-blue-600 md:hover:bg-blue-700 md:text-white "
      >
        <PlusCircle strokeWidth={2} />
        <span className="text-sm/5 hidden md:inline-block font-semibold">
          Add task
        </span>
      </Button>
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
